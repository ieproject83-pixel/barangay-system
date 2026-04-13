import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, query, updateDoc, doc, onSnapshot, getDocs, where } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { sendApprovalEmail, sendRejectionEmail } from '../emailService';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  Clock, 
  Users, 
  UserCheck,
  RefreshCw,
  Activity,
  Zap,
  Play,
  Calendar
} from 'lucide-react';

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [rejectionComment, setRejectionComment] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [showFileModal, setShowFileModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const [todayStats, setTodayStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    processing: 0,
    completed: 0,
    rejected: 0
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (auth.currentUser?.email !== 'ieproject83@gmail.com') {
      toast.error('Access denied. Admin only.');
      window.location.href = '/dashboard';
      return;
    }

    const fetchAppointments = async () => {
      const appointmentsRef = collection(db, 'appointments');
      const snapshot = await getDocs(appointmentsRef);
      const appointmentsData = [];
      snapshot.forEach((doc) => {
        appointmentsData.push({ id: doc.id, ...doc.data() });
      });
      const sortedData = appointmentsData.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setAppointments(sortedData);
      
      setTodayStats({
        total: sortedData.length,
        pending: sortedData.filter(a => a.status === 'pending').length,
        approved: sortedData.filter(a => a.status === 'approved').length,
        processing: sortedData.filter(a => a.status === 'processing').length,
        completed: sortedData.filter(a => a.status === 'completed').length,
        rejected: sortedData.filter(a => a.status === 'rejected').length
      });
    };
    
    fetchAppointments();
    
    const interval = setInterval(fetchAppointments, 10000);
    return () => clearInterval(interval);
  }, []);

  const approveAppointment = async (appointment) => {
    try {
      // Define time slot order and their base queue numbers (6 slots per hour)
      const timeSlotOrder = [
        '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
      ];

      const slotsPerHour = 6;
      const slotIndex = timeSlotOrder.indexOf(appointment.time);

      if (slotIndex === -1) {
        throw new Error('Invalid time slot');
      }

      // Calculate base queue number for this time slot
      const baseQueueNumber = slotIndex * slotsPerHour + 1;

      const appointmentDate = appointment.date;
      const appointmentsRef = collection(db, 'appointments');
      
      // Query all appointments for that specific date and time slot
      const q = query(
        appointmentsRef,
        where('date', '==', appointmentDate),
        where('time', '==', appointment.time)
      );
      const snapshot = await getDocs(q);

      // Count all approved/processing/completed appointments for that specific time slot (excluding current one)
      const approvedCountForSlot = snapshot.docs
        .filter(doc => {
          const apt = doc.data();
          return ['approved', 'processing', 'completed'].includes(apt.status) && doc.id !== appointment.id;
        })
        .length;

      // Next queue number is base + count
      const nextQueueNumber = baseQueueNumber + approvedCountForSlot;

      await updateDoc(doc(db, 'appointments', appointment.id), {
        status: 'approved',
        queueNumber: nextQueueNumber,
        approvedAt: new Date().toISOString(),
        adminComments: null
      });

      await sendApprovalEmail(
        appointment.userEmail,
        appointment.userName,
        {
          queueNumber: nextQueueNumber,
          documentType: appointment.documentType,
          date: appointment.date,
          time: appointment.time,
          requirements: appointment.requirements?.join(', ') || 'Valid ID and Cedula'
        }
      );

      toast.success(`✅ ${appointment.userName} approved! Queue #${nextQueueNumber}. Email sent.`);
    } catch (error) {
      console.error('Error approving appointment:', error);
      toast.error('Failed to approve appointment. Please try again.');
    }
  };

  const startServing = async (appointment) => {
    try {
      await updateDoc(doc(db, 'appointments', appointment.id), {
        status: 'processing',
        startedAt: new Date().toISOString()
      });
      toast.success(`🎯 Now serving Queue #${appointment.queueNumber} - Started at: ${new Date().toLocaleTimeString()}`);
    } catch (error) {
      toast.error('Failed to start serving');
    }
  };

  const completeServing = async (appointment) => {
    try {
      const completedAt = new Date();
      const startedAt = new Date(appointment.startedAt);
      const actualWaitTime = Math.round((completedAt - startedAt) / 60000);
      
      await updateDoc(doc(db, 'appointments', appointment.id), {
        status: 'completed',
        completedAt: completedAt.toISOString(),
        actualWaitTime: actualWaitTime,
        startTime: appointment.startedAt,
        endTime: completedAt.toISOString()
      });
      toast.success(`✅ Queue #${appointment.queueNumber} completed in ${actualWaitTime} minutes`);
    } catch (error) {
      toast.error('Failed to complete');
    }
  };

  const rejectAppointment = async () => {
    if (!rejectionComment.trim()) {
      toast.error('Please provide a reason');
      return;
    }

    try {
      await updateDoc(doc(db, 'appointments', selectedAppointment.id), {
        status: 'rejected',
        adminComments: rejectionComment,
        rejectedAt: new Date().toISOString()
      });

      await sendRejectionEmail(
        selectedAppointment.userEmail,
        selectedAppointment.userName,
        selectedAppointment.documentType,
        rejectionComment
      );

      toast.success(`❌ ${selectedAppointment.userName} rejected.`);
      setShowRejectModal(false);
      setRejectionComment('');
      setSelectedAppointment(null);
    } catch (error) {
      toast.error('Failed to reject');
    }
  };

  const viewFiles = (files) => {
    setSelectedFiles(files);
    setShowFileModal(true);
  };

  const filteredAppointments = () => {
    let filtered = appointments;
    
    if (filter !== 'all') {
      filtered = filtered.filter(a => a.status === filter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(a => 
        a.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.documentType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.queueNumber?.toString().includes(searchTerm)
      );
    }
    
    return filtered;
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending': 
        return <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>⏳ Pending</span>;
      case 'approved': 
        return <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>✅ Approved</span>;
      case 'processing': 
        return <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>⚙️ Processing</span>;
      case 'completed': 
        return <span style={{ background: '#ede9fe', color: '#6d28d9', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>🎉 Completed</span>;
      case 'rejected': 
        return <span style={{ background: '#fee2e2', color: '#991b1b', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>❌ Rejected</span>;
      default: 
        return <span>{status}</span>;
    }
  };

  const getPriorityBadge = (isPriority, priorityType) => {
    if (isPriority) {
      const labels = {
        senior: '👴 Senior',
        pwd: '♿ PWD',
        pregnant: '🤰 Pregnant'
      };
      return <span style={{ background: '#ef4444', color: 'white', padding: '2px 8px', borderRadius: '20px', fontSize: '10px', marginLeft: '8px' }}>{labels[priorityType] || 'Priority'}</span>;
    }
    return null;
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '—';
    try {
      return new Date(timestamp).toLocaleTimeString();
    } catch {
      return '—';
    }
  };

  // Filter button styles
  const getFilterButtonStyle = (filterName) => {
    const isActive = filter === filterName;
    
    const styles = {
      all: {
        active: { background: '#4f46e5', color: 'white', border: 'none' },
        inactive: { background: 'white', color: '#4f46e5', border: '1px solid #4f46e5' }
      },
      pending: {
        active: { background: '#f59e0b', color: 'white', border: 'none' },
        inactive: { background: 'white', color: '#f59e0b', border: '1px solid #f59e0b' }
      },
      approved: {
        active: { background: '#10b981', color: 'white', border: 'none' },
        inactive: { background: 'white', color: '#10b981', border: '1px solid #10b981' }
      },
      processing: {
        active: { background: '#3b82f6', color: 'white', border: 'none' },
        inactive: { background: 'white', color: '#3b82f6', border: '1px solid #3b82f6' }
      },
      completed: {
        active: { background: '#8b5cf6', color: 'white', border: 'none' },
        inactive: { background: 'white', color: '#8b5cf6', border: '1px solid #8b5cf6' }
      },
      rejected: {
        active: { background: '#ef4444', color: 'white', border: 'none' },
        inactive: { background: 'white', color: '#ef4444', border: '1px solid #ef4444' }
      }
    };
    
    return styles[filterName]?.[isActive ? 'active' : 'inactive'] || styles.all.inactive;
  };

  return (
    <div className="container" style={{ maxWidth: '1400px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px', color: '#1a1a2e' }}>🏛️ Admin Dashboard</h1>
        <p style={{ color: '#4a5568' }}>Queue Management System | Barangay Del Pilar</p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', marginBottom: '24px' }}>
        <div className="card" style={{ textAlign: 'center', padding: '16px', background: 'white' }}>
          <Users size={24} style={{ margin: '0 auto', color: '#4f46e5' }} />
          <h4 style={{ margin: '8px 0', color: '#333' }}>Total</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{todayStats.total}</p>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '16px', background: '#fef3c7' }}>
          <Clock size={24} style={{ margin: '0 auto', color: '#f59e0b' }} />
          <h4 style={{ margin: '8px 0', color: '#92400e' }}>Pending</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400e' }}>{todayStats.pending}</p>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '16px', background: '#dcfce7' }}>
          <CheckCircle size={24} style={{ margin: '0 auto', color: '#10b981' }} />
          <h4 style={{ margin: '8px 0', color: '#166534' }}>Approved</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#166534' }}>{todayStats.approved}</p>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '16px', background: '#dbeafe' }}>
          <Activity size={24} style={{ margin: '0 auto', color: '#3b82f6' }} />
          <h4 style={{ margin: '8px 0', color: '#1e40af' }}>Processing</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e40af' }}>{todayStats.processing}</p>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '16px', background: '#ede9fe' }}>
          <Zap size={24} style={{ margin: '0 auto', color: '#8b5cf6' }} />
          <h4 style={{ margin: '8px 0', color: '#6d28d9' }}>Completed</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#6d28d9' }}>{todayStats.completed}</p>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '16px', background: '#fee2e2' }}>
          <XCircle size={24} style={{ margin: '0 auto', color: '#ef4444' }} />
          <h4 style={{ margin: '8px 0', color: '#991b1b' }}>Rejected</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#991b1b' }}>{todayStats.rejected}</p>
        </div>
      </div>

      {/* Filter Tabs with Colored Buttons */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setFilter('all')} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '40px', 
            cursor: 'pointer', 
            fontWeight: '600',
            ...getFilterButtonStyle('all')
          }}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('pending')} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '40px', 
            cursor: 'pointer', 
            fontWeight: '600',
            ...getFilterButtonStyle('pending')
          }}
        >
          Pending
        </button>
        <button 
          onClick={() => setFilter('approved')} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '40px', 
            cursor: 'pointer', 
            fontWeight: '600',
            ...getFilterButtonStyle('approved')
          }}
        >
          Approved
        </button>
        <button 
          onClick={() => setFilter('processing')} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '40px', 
            cursor: 'pointer', 
            fontWeight: '600',
            ...getFilterButtonStyle('processing')
          }}
        >
          Processing
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '40px', 
            cursor: 'pointer', 
            fontWeight: '600',
            ...getFilterButtonStyle('completed')
          }}
        >
          Completed
        </button>
        <button 
          onClick={() => setFilter('rejected')} 
          style={{ 
            padding: '8px 20px', 
            borderRadius: '40px', 
            cursor: 'pointer', 
            fontWeight: '600',
            ...getFilterButtonStyle('rejected')
          }}
        >
          Rejected
        </button>
      </div>

      {/* Search Bar */}
      <div className="card" style={{ marginBottom: '20px', background: 'white' }}>
        <input
          type="text"
          placeholder="🔍 Search by name, email, document, or queue number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '2px solid #e2e8f0', fontSize: '14px', outline: 'none' }}
        />
      </div>

      {/* Appointments Table */}
      <div className="card" style={{ background: 'white', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <th style={{ padding: '12px', color: '#4a5568' }}>Queue #</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>Resident</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>Document</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>Schedule</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>Priority</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>Status</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>Start Time</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>End Time</th>
              <th style={{ padding: '12px', color: '#4a5568' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments().map((apt) => (
              <tr key={apt.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#333' }}>
                  {apt.queueNumber ? `#${apt.queueNumber}` : '—'}
                </td>
                <td style={{ padding: '12px' }}>
                  <strong style={{ color: '#333' }}>{apt.userName}</strong>
                  <br />
                  <small style={{ color: '#718096' }}>{apt.userEmail}</small>
                </td>
                <td style={{ padding: '12px', color: '#333' }}>{apt.documentType}</td>
                <td style={{ padding: '12px', color: '#333' }}>
                  {apt.date ? (
                    <>
                      {apt.date}<br />
                      <small style={{ color: '#718096' }}>{apt.time || 'TBD'}</small>
                    </>
                  ) : '—'}
                </td>
                <td style={{ padding: '12px' }}>
                  {getPriorityBadge(apt.isPriority, apt.priorityType)}
                  {!apt.isPriority && <span style={{ fontSize: '12px', color: '#9ca3af' }}>Regular</span>}
                </td>
                <td style={{ padding: '12px' }}>{getStatusBadge(apt.status)}</td>
                <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>
                  {apt.status === 'processing' || apt.status === 'completed' ? formatTime(apt.startedAt) : '—'}
                </td>
                <td style={{ padding: '12px', fontSize: '13px', color: '#333' }}>
                  {apt.status === 'completed' ? formatTime(apt.completedAt) : '—'}
                </td>
                <td style={{ padding: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button onClick={() => viewFiles(apt.uploadedFiles)} className="btn-outline" style={{ padding: '6px 12px', fontSize: '12px', background: 'white', border: '1px solid #667eea', color: '#667eea', borderRadius: '8px', cursor: 'pointer' }}>
                      <Eye size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      Files
                    </button>
                    
                    {apt.status === 'pending' && (
                      <button onClick={() => approveAppointment(apt)} className="btn-primary" style={{ padding: '6px 12px', fontSize: '12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                        <CheckCircle size={14} style={{ display: 'inline', marginRight: '4px' }} />
                        Approve
                      </button>
                    )}
                    
                    {apt.status === 'pending' && (
                      <button onClick={() => { setSelectedAppointment(apt); setShowRejectModal(true); }} className="btn-danger" style={{ padding: '6px 12px', fontSize: '12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                        <XCircle size={14} style={{ display: 'inline', marginRight: '4px' }} />
                        Reject
                      </button>
                    )}
                    
                    {apt.status === 'approved' && (
                      <button onClick={() => startServing(apt)} style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Play size={14} /> Start Serving
                      </button>
                    )}
                    
                    {apt.status === 'processing' && (
                      <button onClick={() => completeServing(apt)} style={{ background: '#8b5cf6', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle size={14} /> Complete
                      </button>
                    )}
                  </div>
                  {apt.adminComments && apt.status === 'rejected' && (
                    <div style={{ fontSize: '11px', color: '#dc2626', marginTop: '8px', background: '#fee2e2', padding: '4px 8px', borderRadius: '6px' }}>
                      Reason: {apt.adminComments}
                    </div>
                  )}
                  {apt.actualWaitTime && apt.status === 'completed' && (
                    <div style={{ fontSize: '10px', color: '#6d28d9', marginTop: '4px' }}>
                      Duration: {apt.actualWaitTime} min
                    </div>
                  )}
                </td>
               </tr>
            ))}
            {filteredAppointments().length === 0 && (
              <tr>
                <td colSpan="9" style={{ padding: '40px', textAlign: 'center', color: '#718096' }}>
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Rejection Modal */}
      {showRejectModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="card" style={{ maxWidth: '500px', width: '90%', background: 'white', padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ color: '#333', marginBottom: '8px' }}>Reject Appointment</h3>
            <p style={{ marginTop: '8px', color: '#4a5568' }}>Provide reason for rejection:</p>
            <textarea
              value={rejectionComment}
              onChange={(e) => setRejectionComment(e.target.value)}
              rows="4"
              style={{ width: '100%', margin: '16px 0', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '12px', fontSize: '14px', outline: 'none' }}
              placeholder="e.g., Missing required documents, Invalid ID, Incomplete requirements, etc."
            />
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => { setShowRejectModal(false); setRejectionComment(''); }} className="btn-outline" style={{ padding: '8px 16px', background: 'white', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
              <button onClick={rejectAppointment} className="btn-danger" style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Confirm Rejection</button>
            </div>
          </div>
        </div>
      )}

      {/* Files Modal */}
      {showFileModal && selectedFiles && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, overflow: 'auto' }}>
          <div className="card" style={{ maxWidth: '600px', width: '90%', maxHeight: '80vh', overflow: 'auto', background: 'white', padding: '24px', borderRadius: '16px', position: 'relative' }}>
            <h3 style={{ color: '#333', marginBottom: '16px' }}>📄 Uploaded Documents</h3>
            <button
              onClick={() => setShowFileModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            {Object.entries(selectedFiles).map(([name, data]) => (
              <div key={name} style={{ margin: '16px 0', padding: '16px', background: '#f7fafc', borderRadius: '12px' }}>
                <strong style={{ color: '#333' }}>{name}</strong>
                {data && data.startsWith('data:image') && (
                  <img src={data} alt={name} style={{ maxWidth: '100%', marginTop: '12px', borderRadius: '8px' }} />
                )}
              </div>
            ))}
            <button onClick={() => setShowFileModal(false)} className="btn-primary" style={{ width: '100%', marginTop: '16px', padding: '12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;