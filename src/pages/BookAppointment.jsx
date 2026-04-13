import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, addDoc, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import FileUpload from '../components/FileUpload';
import { sendBookingConfirmation } from '../emailService';

function BookAppointment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [formData, setFormData] = useState({
    documentType: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [maxSlotsPerHour, setMaxSlotsPerHour] = useState(6); // 6 slots per hour based on updated requirements

  // Document requirements mapping
  const documentRequirements = {
    'Barangay Clearance': ['Valid ID', 'Cedula'],
    'Certificate of Residency': ['Valid ID with address', 'Proof of residence', 'Cedula'],
    'Certificate of Indigency': ['Valid ID', 'Proof of residency', 'Cedula'],
    'Barangay Business Clearance': ['DTI/SEC registration', 'Valid ID', 'Cedula', 'Business address proof'],
    'Barangay Permit': ['Written request', 'Valid ID', 'Cedula', 'Activity description'],
    'Barangay ID': ['Proof of residency', 'Birth certificate', 'Cedula', '1x1 or 2x2 photo'],
    'Barangay Certification': ['Valid ID', 'Proof of residency', 'Cedula', 'Purpose of certification']
  };

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentUser(user);
      fetchUserData(user.uid);
    } else {
      navigate('/login');
    }
    generateAvailableDates();
  }, []);

  // Fetch available time slots when date changes
  useEffect(() => {
    if (formData.preferredDate) {
      fetchAvailableTimeSlots(formData.preferredDate);
    }
  }, [formData.preferredDate]);

  const fetchUserData = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    setAvailableDates(dates);
  };

  const fetchAvailableTimeSlots = async (date) => {
    setLoadingSlots(true);
    try {
      // Get all approved appointments for the selected date
      const appointmentsRef = collection(db, 'appointments');
      const q = query(
        appointmentsRef,
        where('date', '==', date),
        where('status', 'in', ['approved', 'pending', 'processing'])
      );
      const snapshot = await getDocs(q);
      
      // Count appointments per time slot
      const slotCounts = {};
      timeSlots.forEach(slot => {
        slotCounts[slot] = 0;
      });
      
      snapshot.forEach((doc) => {
        const appointment = doc.data();
        if (appointment.time && slotCounts[appointment.time] !== undefined) {
          slotCounts[appointment.time]++;
        }
      });
      
      // Filter available slots (less than maxSlotsPerHour)
      const available = timeSlots.filter(slot => slotCounts[slot] < maxSlotsPerHour);
      setAvailableTimeSlots(available);
      
      // Clear selected time if it's no longer available
      if (formData.preferredTime && !available.includes(formData.preferredTime)) {
        setFormData(prev => ({ ...prev, preferredTime: '' }));
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
      setAvailableTimeSlots(timeSlots);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleFileUpload = (requirementType, fileData) => {
    setUploadedFiles(prev => ({
      ...prev,
      [requirementType]: fileData
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const checkAllFilesUploaded = () => {
    const requirements = documentRequirements[formData.documentType];
    if (!requirements) return false;
    
    for (let req of requirements) {
      if (!uploadedFiles[req]) {
        toast.error(`Please upload: ${req}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      toast.error('Please login first');
      navigate('/login');
      return;
    }

    if (!formData.documentType) {
      toast.error('Please select a document type');
      return;
    }

    if (!formData.preferredDate) {
      toast.error('Please select a date');
      return;
    }

    if (!formData.preferredTime) {
      toast.error('Please select a time');
      return;
    }

    if (!checkAllFilesUploaded()) {
      return;
    }
    
    setLoading(true);

    try {
      // Double-check slot availability before booking
      const appointmentsRef = collection(db, 'appointments');
      const q = query(
        appointmentsRef,
        where('date', '==', formData.preferredDate),
        where('time', '==', formData.preferredTime),
        where('status', 'in', ['approved', 'pending', 'processing'])
      );
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.size >= maxSlotsPerHour) {
        toast.error(`This time slot is fully booked. Max ${maxSlotsPerHour} appointments per hour.`);
        setLoading(false);
        fetchAvailableTimeSlots(formData.preferredDate);
        return;
      }

      const userName = userData?.fullName || currentUser.displayName || 'Resident';
      const userEmail = currentUser.email;

      const appointmentData = {
        userId: currentUser.uid,
        userEmail: userEmail,
        userName: userName,
        documentType: formData.documentType,
        date: formData.preferredDate,
        time: formData.preferredTime,
        status: 'pending',
        isPriority: userData?.isPriority || false,
        priorityType: userData?.priorityType || null,
        notes: formData.notes,
        uploadedFiles: uploadedFiles,
        requirements: documentRequirements[formData.documentType] || [],
        createdAt: new Date().toISOString(),
        adminComments: null
      };
      
      await addDoc(collection(db, 'appointments'), appointmentData);

      try {
        await sendBookingConfirmation(
          userEmail,
          userName,
          {
            documentType: formData.documentType,
            date: formData.preferredDate,
            time: formData.preferredTime
          }
        );
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }

      toast.success(
        '✅ Appointment request submitted! Waiting for admin approval.',
        { duration: 5000 }
      );
      
      setUploadedFiles({});
      setFormData({
        documentType: '',
        preferredDate: '',
        preferredTime: '',
        notes: ''
      });
      
      setTimeout(() => {
        navigate('/appointments');
      }, 2000);
      
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast.error('Failed to submit appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const documentOptions = [
    'Barangay Clearance',
    'Certificate of Residency',
    'Certificate of Indigency',
    'Barangay Business Clearance',
    'Barangay Permit',
    'Barangay ID',
    'Barangay Certification'
  ];

  if (!currentUser) {
    return (
      <div className="container">
        <div className="card">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '1400px' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        {/* Queue Information Section */}
        <div className="card" style={{ flex: '0 0 320px' }}>
          <h3 style={{ marginBottom: '16px', color: '#2d3748' }}>ℹ️ Queue Information</h3>

          <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#4a5568' }}>
            <div style={{ marginBottom: '16px', padding: '12px', background: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#1e40af' }}>
                Priority For Seniors, PWDs, and Pregnant Woman
              </p>
              <p style={{ margin: 0, fontSize: '13px' }}>
                Seniors/PWDs/Pregnant are placed at the top of the waiting list
              </p>
            </div>

            <div style={{ marginBottom: '16px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#15803d' }}>
                🔄 FIFO System
              </p>
              <p style={{ margin: 0, fontSize: '13px' }}>
                First-in, first-out for regular residentsz
              </p>
            </div>

            <div style={{ marginBottom: '16px', padding: '12px', background: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#d97706' }}>
                ⚠️ No-Show Policy
              </p>
              <p style={{ margin: 0, fontSize: '13px' }}>
                If you don't arrive within 5 minutes, you will be bumped down 3 slots
              </p>
            </div>

            <div style={{ marginBottom: '16px', padding: '12px', background: '#fdf2f8', borderRadius: '8px', borderLeft: '4px solid #ec4899' }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#be185d' }}>
                ⏱️ Estimated Wait Time
              </p>
              <p style={{ margin: 0, fontSize: '13px' }}>
                Based on 8-12 minutes per document (Mean Service Time)
              </p>
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="card" style={{ flex: 1 }}>
          <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Book an Appointment</h2>
          <p style={{ textAlign: 'center', color: '#718096', marginBottom: '24px' }}>Fill out the form below to request a document</p>

          <div style={{ background: '#ebf8ff', padding: '16px', borderRadius: '16px', marginBottom: '24px' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>
              📧 Confirmation will be sent to: <strong>{currentUser?.email}</strong>
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#4a5568' }}>
              ⏳ After submission, admin will review your requirements.
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#667eea' }}>
              📅 Max {maxSlotsPerHour} appointments per hour slot.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Document Type *</label>
              <select name="documentType" value={formData.documentType} onChange={handleChange} required>
                <option value="">Select document type</option>
                {documentOptions.map(doc => (
                  <option key={doc} value={doc}>{doc}</option>
                ))}
              </select>
            </div>

            {formData.documentType && documentRequirements[formData.documentType] && (
              <div style={{ background: '#fefcbf', padding: '20px', borderRadius: '16px', marginBottom: '20px' }}>
                <h4 style={{ marginTop: 0, marginBottom: '16px' }}>📄 Required Documents - Please Upload:</h4>
                {documentRequirements[formData.documentType].map((req, index) => (
                  <FileUpload
                    key={index}
                    requirementType={req}
                    onUploadComplete={handleFileUpload}
                  />
                ))}
              </div>
            )}

            <div className="form-group">
              <label>Preferred Date *</label>
              <select name="preferredDate" value={formData.preferredDate} onChange={handleChange} required>
                <option value="">Select date</option>
                {availableDates.map(date => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Preferred Time *</label>
              <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} required disabled={loadingSlots}>
                <option value="">Select time</option>
                {loadingSlots ? (
                  <option disabled>Loading available slots...</option>
                ) : (
                  availableTimeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))
                )}
              </select>
              {!loadingSlots && availableTimeSlots.length === 0 && formData.preferredDate && (
                <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '8px' }}>
                  No available slots for this date. Please select another date.
                </p>
              )}
            </div>

            <div className="form-group">
              <label>Additional Notes (Optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Any special requests or additional information..."
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Appointment Request'}
            </button>
          </form>
        </div>

        {/* Data Privacy Section */}
        <div className="card" style={{ flex: '0 0 350px' }}>
          <h3 style={{ marginBottom: '16px', color: '#2d3748' }}>🔒 Data Privacy Act Compliance</h3>

          <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#4a5568' }}>
            <p style={{ marginBottom: '12px' }}>
              <strong>Data Privacy Notice:</strong> Your personal information is collected and processed in accordance with Republic Act No. 10173 (Data Privacy Act of 2012) and its implementing rules and regulations.
            </p>

            <p style={{ marginBottom: '12px' }}>
              <strong>Purpose:</strong> The information you provide will be used solely for processing your barangay document requests and appointment scheduling.
            </p>

            <p style={{ marginBottom: '12px' }}>
              <strong>Data Protection:</strong> All personal data is secured and will not be shared with third parties without your consent, except as required by law.
            </p>

            <p style={{ marginBottom: '12px' }}>
              <strong>Your Rights:</strong> You have the right to access, correct, or request deletion of your personal data. Contact the barangay office for any privacy-related concerns.
            </p>

            <p style={{ marginBottom: '12px' }}>
              <strong>Consent:</strong> By submitting this form, you consent to the collection and processing of your personal information for the stated purposes.
            </p>

            <div style={{ background: '#f7fafc', padding: '12px', borderRadius: '8px', marginTop: '16px' }}>
              <p style={{ margin: 0, fontSize: '13px', fontStyle: 'italic' }}>
                📞 For privacy concerns: Contact Barangay Office<br/>
                📧 Email: privacy@barangay.gov.ph
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;