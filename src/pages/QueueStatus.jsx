import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, query, where, onSnapshot, orderBy, updateDoc, doc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { Users, Clock, UserCheck, Calendar, RefreshCw, Play, CheckCircle } from 'lucide-react';

function QueueStatus() {
  const [queue, setQueue] = useState([]);
  const [nowServing, setNowServing] = useState(null);
  const [estimatedWaitTime, setEstimatedWaitTime] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [availableDates, setAvailableDates] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if current user is admin
    const user = auth.currentUser;
    if (user?.email === 'ieproject83@gmail.com') {
      setIsAdmin(true);
    }
    
    generateAvailableDates();
  }, []);

  useEffect(() => {
    // Real-time listener for selected date
    const q = query(
      collection(db, 'appointments'),
      where('status', 'in', ['approved', 'processing']),
      where('date', '==', selectedDate),
      orderBy('queueNumber', 'asc')
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const queueData = [];
      snapshot.forEach((doc) => {
        queueData.push({ id: doc.id, ...doc.data() });
      });
      
      // Sort: priority first (non-preemptive), then by queue number
      const sortedQueue = queueData.sort((a, b) => {
        if (a.isPriority && !b.isPriority) return -1;
        if (!a.isPriority && b.isPriority) return 1;
        return (a.queueNumber || 999) - (b.queueNumber || 999);
      });
      
      setQueue(sortedQueue);
      
      const serving = sortedQueue.find(a => a.status === 'processing');
      setNowServing(serving);
      
      const pendingCount = sortedQueue.filter(a => a.status === 'approved').length;
      setEstimatedWaitTime(pendingCount * 10);
    });

    return () => unsubscribe();
  }, [selectedDate]);

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    setAvailableDates(dates);
  };

  const startServing = async (appointment) => {
    if (!isAdmin) {
      toast.error('Only admins can perform this action');
      return;
    }
    
    try {
      await updateDoc(doc(db, 'appointments', appointment.id), {
        status: 'processing',
        startedAt: new Date().toISOString()
      });
      toast.success(`🎯 Now serving Queue #${appointment.queueNumber}`);
    } catch (error) {
      toast.error('Failed to start serving');
    }
  };

  const completeServing = async (appointment) => {
    if (!isAdmin) {
      toast.error('Only admins can perform this action');
      return;
    }
    
    try {
      const completedAt = new Date();
      const startedAt = new Date(appointment.startedAt);
      const actualWaitTime = Math.round((completedAt - startedAt) / 60000);
      
      await updateDoc(doc(db, 'appointments', appointment.id), {
        status: 'completed',
        completedAt: completedAt.toISOString(),
        actualWaitTime: actualWaitTime
      });
      toast.success(`✅ Queue #${appointment.queueNumber} completed in ${actualWaitTime} minutes`);
    } catch (error) {
      toast.error('Failed to complete');
    }
  };

  const getPriorityLabel = (isPriority, priorityType) => {
    if (isPriority) {
      switch(priorityType) {
        case 'senior': return '👴 Senior Citizen';
        case 'pwd': return '♿ PWD';
        case 'pregnant': return '🤰 Pregnant';
        default: return '⭐ Priority';
      }
    }
    return 'Regular';
  };

  return (
    <div className="container">
      {/* Date Selector */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Calendar size={20} color="#667eea" />
          <select 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ padding: '10px 16px', borderRadius: '12px', border: '2px solid #e2e8f0', flex: 1 }}
          >
            {availableDates.map(date => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </option>
            ))}
          </select>
          <RefreshCw size={18} color="#718096" style={{ cursor: 'pointer' }} onClick={() => window.location.reload()} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Current Service Display */}
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h3 style={{ color: 'white', marginBottom: '16px' }}>Now Serving</h3>
          {nowServing ? (
            <>
              <div style={{ fontSize: '72px', fontWeight: '800', margin: '20px 0' }}>
                #{nowServing.queueNumber}
              </div>
              <p><strong>{nowServing.documentType}</strong></p>
              <p>{nowServing.userName}</p>
              {nowServing.isPriority && (
                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', display: 'inline-block', marginTop: '10px', fontSize: '12px' }}>
                  {getPriorityLabel(nowServing.isPriority, nowServing.priorityType)}
                </span>
              )}
              {isAdmin && nowServing.status === 'processing' && (
                <button
                  onClick={() => completeServing(nowServing)}
                  style={{ 
                    marginTop: '16px', 
                    background: '#10b981', 
                    color: 'white', 
                    border: 'none', 
                    padding: '8px 20px', 
                    borderRadius: '40px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <CheckCircle size={16} /> Complete
                </button>
              )}
            </>
          ) : (
            <div style={{ padding: '40px 0' }}>
              <UserCheck size={48} style={{ margin: '0 auto', opacity: 0.7 }} />
              <p style={{ marginTop: '16px' }}>No one is currently being served</p>
            </div>
          )}
        </div>

        {/* Queue Statistics */}
        <div>
          <div className="card">
            <h3 style={{ marginBottom: '16px' }}>Queue Statistics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: '#f7fafc', borderRadius: '16px' }}>
                <Users size={32} style={{ margin: '0 auto', color: '#667eea' }} />
                <h4 style={{ marginTop: '8px' }}>Waiting</h4>
                <p style={{ fontSize: '28px', fontWeight: 'bold' }}>{queue.filter(q => q.status === 'approved').length}</p>
              </div>
              <div style={{ textAlign: 'center', padding: '20px', background: '#f7fafc', borderRadius: '16px' }}>
                <Clock size={32} style={{ margin: '0 auto', color: '#667eea' }} />
                <h4 style={{ marginTop: '8px' }}>Est. Wait Time</h4>
                <p style={{ fontSize: '28px', fontWeight: 'bold' }}>{estimatedWaitTime} min</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Queue List */}
      <div className="card" style={{ marginTop: '24px' }}>
        <h3 style={{ marginBottom: '16px' }}>Complete Queue</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Queue #</th>
                <th style={{ padding: '12px' }}>Document Type</th>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Time</th>
                <th style={{ padding: '12px' }}>Priority</th>
                <th style={{ padding: '12px' }}>Status</th>
                {isAdmin && <th style={{ padding: '12px' }}>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {queue.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>#{item.queueNumber}</td>
                  <td style={{ padding: '12px' }}>{item.documentType}</td>
                  <td style={{ padding: '12px' }}>{item.userName}</td>
                  <td style={{ padding: '12px' }}>{item.time || '—'}</td>
                  <td style={{ padding: '12px' }}>{getPriorityLabel(item.isPriority, item.priorityType)}</td>
                  <td style={{ padding: '12px' }}>
                    {item.status === 'processing' ? (
                      <span style={{ color: '#667eea' }}>🔵 Being Served</span>
                    ) : (
                      <span style={{ color: '#10b981' }}>🟢 Waiting</span>
                    )}
                  </td>
                  {isAdmin && (
                    <td style={{ padding: '12px' }}>
                      {item.status === 'approved' && (
                        <button
                          onClick={() => startServing(item)}
                          style={{ 
                            background: '#3b82f6', 
                            color: 'white', 
                            border: 'none', 
                            padding: '6px 12px', 
                            borderRadius: '8px', 
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '12px'
                          }}
                        >
                          <Play size={14} /> Start Serving
                        </button>
                      )}
                      {item.status === 'processing' && (
                        <button
                          onClick={() => completeServing(item)}
                          style={{ 
                            background: '#10b981', 
                            color: 'white', 
                            border: 'none', 
                            padding: '6px 12px', 
                            borderRadius: '8px', 
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '12px'
                          }}
                        >
                          <CheckCircle size={14} /> Complete
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              ))}
              {queue.length === 0 && (
                <tr>
                  <td colSpan={isAdmin ? 7 : 6} style={{ padding: '40px', textAlign: 'center', color: '#718096' }}>
                    No appointments scheduled for this date
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Queue Information */}
      <div className="card" style={{ marginTop: '24px', background: '#ebf8ff' }}>
        <h4 style={{ marginBottom: '12px' }}>ℹ️ Queue Information</h4>
        <ul style={{ marginLeft: '20px', lineHeight: '1.8', fontSize: '14px' }}>
          <li><strong>Non-preemptive Priority:</strong> Seniors/PWDs/Pregnant are placed at the top of the waiting list</li>
          <li><strong>FIFO System:</strong> First-in, first-out for regular residents</li>
          <li><strong>No-Show Policy:</strong> If you don't arrive within 5 minutes, you will be bumped down 3 slots</li>
          <li><strong>Estimated wait time:</strong> Based on 8-12 minutes per document (Mean Service Time)</li>
          <li><strong>Queue refreshes automatically</strong> every few seconds</li>
        </ul>
      </div>
    </div>
  );
}

export default QueueStatus;