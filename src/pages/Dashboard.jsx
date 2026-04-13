import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import QueueDisplay from '../components/QueueDisplay';
import { Calendar, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({ pending: 0, approved: 0 });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    if (auth.currentUser) {
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    }
  };

  const documentTypes = [
    { name: 'Barangay Clearance', icon: FileText, requirements: 'Valid ID, Cedula, Fee ₱20-₱100' },
    { name: 'Certificate of Residency', icon: FileText, requirements: 'Valid ID, Proof of Residence, Cedula' },
    { name: 'Certificate of Indigency', icon: FileText, requirements: 'Valid ID, Proof of Residency, Cedula' },
    { name: 'Barangay Business Clearance', icon: FileText, requirements: 'DTI/SEC, Valid ID, Cedula, Business Proof' },
    { name: 'Barangay Permit', icon: FileText, requirements: 'Written Request, Valid ID, Cedula' },
    { name: 'Barangay ID', icon: FileText, requirements: 'Proof of Residency, Birth Cert, Cedula, Photo' },
    { name: 'Barangay Certification', icon: FileText, requirements: 'Valid ID, Proof of Residency, Cedula' }
  ];

  return (
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        {/* Left Column */}
        <div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '24px' }}>Welcome, {userData?.fullName || auth.currentUser?.displayName || 'Resident'}!</h2>
              {userData?.isPriority && <span className="priority-badge">⭐ {userData.priorityType?.toUpperCase()} Priority</span>}
            </div>
            <p style={{ color: '#718096', marginBottom: '20px' }}>
              Barangay Del Pilar, City of San Fernando, Pampanga
            </p>
            <Link to="/book">
              <button className="btn btn-primary">+ Book New Appointment</button>
            </Link>
          </div>

          <div className="card" style={{ marginTop: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>📄 Available Documents</h3>
            <div className="doc-grid">
              {documentTypes.map((doc, index) => (
                <div key={index} className="doc-card">
                  <doc.icon size={20} color="#667eea" style={{ marginBottom: '8px' }} />
                  <strong style={{ display: 'block', marginBottom: '4px' }}>{doc.name}</strong>
                  <small style={{ color: '#718096' }}>{doc.requirements}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <QueueDisplay />
          
          <div className="card" style={{ marginTop: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>⏰ Barangay Hours</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Monday - Friday</span>
              <strong>8:00 AM - 5:00 PM</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Saturday</span>
              <strong>9:00 AM - 12:00 PM</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Sunday</span>
              <strong>Closed</strong>
            </div>
            <hr style={{ margin: '16px 0' }} />
            <div style={{ fontSize: '13px', color: '#718096' }}>
              <p>⚠️ Please arrive 5 minutes before your scheduled time</p>
              <p>⭐ Priority given to Seniors, PWDs, and Pregnant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;