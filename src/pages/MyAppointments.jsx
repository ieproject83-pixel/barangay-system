import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Eye } from 'lucide-react';

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentUser(user);
      fetchAppointments(user.uid);
      console.log('Current user UID:', user.uid);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchAppointments = async (userId) => {
    try {
      console.log('Fetching appointments for userId:', userId);
      
      // Get all appointments for this user
      const appointmentsRef = collection(db, 'appointments');
      const q = query(appointmentsRef, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      
      const appointmentsData = [];
      querySnapshot.forEach((doc) => {
        appointmentsData.push({ id: doc.id, ...doc.data() });
        console.log('Found appointment:', doc.data());
      });
      
      console.log('Total appointments found:', appointmentsData.length);
      setAppointments(appointmentsData);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusDisplay = (status) => {
    switch(status) {
      case 'pending':
        return { icon: <AlertCircle color="#f59e0b" size={20} />, text: 'Pending Approval', color: '#f59e0b', bg: '#fef3c7' };
      case 'approved':
        return { icon: <CheckCircle color="#10b981" size={20} />, text: 'Approved', color: '#10b981', bg: '#dcfce7' };
      case 'rejected':
        return { icon: <XCircle color="#dc2626" size={20} />, text: 'Rejected', color: '#dc2626', bg: '#fee2e2' };
      default:
        return { icon: null, text: status, color: '#666', bg: '#f3f4f6' };
    }
  };

  const viewUploadedFiles = (files) => {
    setSelectedFiles(files);
  };

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <div className="card">Loading appointments...</div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <div className="card">
          <p>Please login to view your appointments.</p>
          <button onClick={() => window.location.href = '/login'} className="btn btn-primary" style={{ marginTop: '15px' }}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2 style={{ marginBottom: '20px' }}>My Appointments</h2>
        
        {appointments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>No appointment requests found.</p>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
              Your User ID: {currentUser?.uid}
            </p>
            <button onClick={() => window.location.href = '/book'} className="btn btn-primary" style={{ marginTop: '15px' }}>
              Book Your First Appointment
            </button>
          </div>
        ) : (
          <>
            <p style={{ marginBottom: '15px', color: '#666' }}>
              Found {appointments.length} appointment(s) for {currentUser?.email}
            </p>
            {appointments.map((appointment) => {
              const statusDisplay = getStatusDisplay(appointment.status);
              return (
                <div key={appointment.id} style={{ 
                  border: `1px solid ${statusDisplay.color}`, 
                  borderRadius: '8px', 
                  padding: '15px', 
                  marginBottom: '15px',
                  background: statusDisplay.bg
                }}>
                  <div>
                    <h3 style={{ marginBottom: '10px' }}>{appointment.documentType}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      {statusDisplay.icon}
                      <span style={{ fontWeight: 'bold', color: statusDisplay.color }}>{statusDisplay.text}</span>
                    </div>
                    
                    <div style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                      Submitted: {new Date(appointment.createdAt).toLocaleString()}
                    </div>
                    
                    {appointment.status === 'approved' && appointment.date && (
                      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Calendar size={16} />
                          <span><strong>Date:</strong> {appointment.date}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <Clock size={16} />
                          <span><strong>Time:</strong> {appointment.time}</span>
                        </div>
                        {appointment.queueNumber && (
                          <div>
                            <strong>Queue #:</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4f46e5' }}>{appointment.queueNumber}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {appointment.status === 'pending' && (
                      <div style={{ marginTop: '10px', padding: '10px', background: '#fef3c7', borderRadius: '5px' }}>
                        <strong>⏳ Status:</strong> Waiting for admin approval.
                        <br />
                        <small>Requested date: {appointment.date || 'Not set'} at {appointment.time || 'Not set'}</small>
                      </div>
                    )}
                    
                    {appointment.status === 'rejected' && appointment.adminComments && (
                      <div style={{ marginTop: '10px', padding: '10px', background: 'white', borderRadius: '5px', border: '1px solid #fee2e2' }}>
                        <strong style={{ color: '#dc2626' }}>❌ Reason for rejection:</strong>
                        <p style={{ marginTop: '5px', color: '#333' }}>{appointment.adminComments}</p>
                        <button
                          onClick={() => window.location.href = '/book'}
                          style={{ marginTop: '10px', background: '#4f46e5', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}
                        >
                          Resubmit Appointment
                        </button>
                      </div>
                    )}
                    
                    {appointment.uploadedFiles && Object.keys(appointment.uploadedFiles).length > 0 && (
                      <button
                        onClick={() => viewUploadedFiles(appointment.uploadedFiles)}
                        style={{ marginTop: '10px', background: '#4f46e5', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                      >
                        <Eye size={16} /> View Uploaded Documents
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* Files Modal */}
      {selectedFiles && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          overflow: 'auto'
        }}>
          <div className="card" style={{ 
            maxWidth: '600px', 
            width: '90%', 
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <h3>Uploaded Documents</h3>
            <button
              onClick={() => setSelectedFiles(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              ×
            </button>
            <div style={{ marginTop: '20px' }}>
              {Object.entries(selectedFiles).map(([name, fileData]) => (
                <div key={name} style={{ 
                  margin: '15px 0', 
                  padding: '15px', 
                  background: '#f3f4f6', 
                  borderRadius: '8px' 
                }}>
                  <strong>{name}:</strong>
                  {fileData && fileData.startsWith('data:image') ? (
                    <img 
                      src={fileData} 
                      alt={name}
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '200px', 
                        borderRadius: '8px',
                        marginTop: '10px'
                      }} 
                    />
                  ) : (
                    <p style={{ marginTop: '10px', color: '#666' }}>File uploaded</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyAppointments;