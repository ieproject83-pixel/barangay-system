import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs, updateDoc, doc, orderBy, onSnapshot } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { Users, FileText, CheckCircle, Clock, RefreshCw } from 'lucide-react';

function AdminPanel() {
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    processing: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is admin
    if (auth.currentUser?.email !== 'admin@barangay.com') {
      toast.error('Access denied. Admin only.');
      window.location.href = '/dashboard';
      return;
    }
    
    // Real-time listener for appointments
    const q = query(
      collection(db, 'appointments'),
      orderBy('date', 'asc'),
      orderBy('queueNumber', 'asc')
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const appointmentsData = [];
      snapshot.forEach((doc) => {
        appointmentsData.push({ id: doc.id, ...doc.data() });
      });
      
      // Sort with priority for pending
      const sorted = appointmentsData.sort((a, b) => {
        if (a.status === 'processing') return -1;
        if (b.status === 'processing') return 1;
        if (a.status === 'pending' && b.status === 'pending') {
          if (a.isPriority && !b.isPriority) return -1;
          if (!a.isPriority && b.isPriority) return 1;
          return a.queueNumber - b.queueNumber;
        }
        return 0;
      });
      
      setAppointments(sorted);
      
      // Calculate stats
      setStats({
        total: appointmentsData.length,
        pending: appointmentsData.filter(a => a.status === 'pending').length,
        completed: appointmentsData.filter(a => a.status === 'completed').length,
        processing: appointmentsData.filter(a => a.status === 'processing').length
      });
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateStatus = async (appointmentId, newStatus) => {
    try {
      await updateDoc(doc(db, 'appointments', appointmentId), {
        status: newStatus,
        updatedAt: new Date().toISOString()
      });
      toast.success(`Appointment marked as ${newStatus}`);
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const bumpQueue = async (appointmentId, currentBumpCount) => {
    const newBumpCount = (currentBumpCount || 0) + 1;
    
    if (newBumpCount >= 3) {
      // Cancel after 3 bumps
      await updateDoc(doc(db, 'appointments', appointmentId), {
        status: 'cancelled',
        cancellationReason: 'No-show after 3 bumps'
      });
      toast.error('Appointment cancelled due to no-show');
    } else {
      await updateDoc(doc(db, 'appointments', appointmentId), {
        bumpedCount: newBumpCount
      });
      toast.warning(`Bumped to position ${newBumpCount + 1} in queue`);
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return <span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Pending</span>;
      case 'processing':
        return <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Processing</span>;
      case 'completed':
        return <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Completed</span>;
      case 'cancelled':
        return <span style={{ background: '#fee2e2', color: '#991b1b', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>Cancelled</span>;
      default:
        return <span style={{ background: '#e5e7eb', color: '#374151', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>{status}</span>;
    }
  };

  if (loading) {
    return <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>Loading admin panel...</div>;
  }

  return (
    <div className="container">
      {/* Admin Stats Dashboard */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <FileText size={32} style={{ margin: '0 auto', color: '#4f46e5' }} />
          <h3>Total</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>{stats.total}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Clock size={32} style={{ margin: '0 auto', color: '#f59e0b' }} />
          <h3>Pending</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>{stats.pending}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <UserCheck size={32} style={{ margin: '0 auto', color: '#3b82f6' }} />
          <h3>Processing</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>{stats.processing}</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <CheckCircle size={32} style={{ margin: '0 auto', color: '#10b981' }} />
          <h3>Completed</h3>
          <p style={{ fontSize: '28px', fontWeight: 'bold' }}>{stats.completed}</p>
        </div>
      </div>

      {/* Queue Management Table */}
      <div className="card">
        <h3 style={{ marginBottom: '20px' }}>Queue Management</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Queue #</th>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Document</th>
                <th style={{ padding: '12px' }}>Date/Time</th>
                <th style={{ padding: '12px' }}>Priority</th>
                <th style={{ padding: '12px' }}>Status</th>
                <th style={{ padding: '12px' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} style={{ 
                  borderBottom: '1px solid #e5e7eb',
                  background: appointment.isPriority && appointment.status === 'pending' ? '#fef3c7' : 'transparent'
                }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>#{appointment.queueNumber}</td>
                  <td style={{ padding: '12px' }}>{appointment.userName}</td>
                  <td style={{ padding: '12px' }}>{appointment.documentType}</td>
                  <td style={{ padding: '12px' }}>
                    {appointment.date}<br />
                    <small>{appointment.time}</small>
                  </td>
                  <td style={{ padding: '12px' }}>
                    {appointment.isPriority ? (
                      <span className="priority-badge">
                        {appointment.priorityType === 'senior' ? '👴 Senior' : 
                         appointment.priorityType === 'pwd' ? '♿ PWD' : '🤰 Pregnant'}
                      </span>
                    ) : (
                      <span style={{ color: '#9ca3af' }}>Regular</span>
                    )}
                  </td>
                  <td style={{ padding: '12px' }}>{getStatusBadge(appointment.status)}</td>
                  <td style={{ padding: '12px' }}>
                    {appointment.status === 'pending' && (
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <button 
                          onClick={() => updateStatus(appointment.id, 'processing')}
                          className="btn btn-primary"
                          style={{ padding: '4px 8px', fontSize: '12px' }}
                        >
                          Start
                        </button>
                        <button 
                          onClick={() => bumpQueue(appointment.id, appointment.bumpedCount || 0)}
                          className="btn"
                          style={{ padding: '4px 8px', fontSize: '12px', background: '#f59e0b', color: 'white' }}
                        >
                          <RefreshCw size={12} style={{ display: 'inline', marginRight: '3px' }} />
                          Bump
                        </button>
                      </div>
                    )}
                    {appointment.status === 'processing' && (
                      <button 
                        onClick={() => updateStatus(appointment.id, 'completed')}
                        className="btn"
                        style={{ padding: '4px 8px', fontSize: '12px', background: '#10b981', color: 'white' }}
                      >
                        <CheckCircle size={12} style={{ display: 'inline', marginRight: '3px' }} />
                        Complete
                      </button>
                    )}
                    {appointment.bumpedCount > 0 && appointment.status === 'pending' && (
                      <div style={{ fontSize: '11px', color: '#dc2626', marginTop: '5px' }}>
                        Bumped: {appointment.bumpedCount}/3
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {appointments.length === 0 && (
                <tr>
                  <td colSpan="7" style={{ padding: '40px', textAlign: 'center' }}>
                    No appointments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;