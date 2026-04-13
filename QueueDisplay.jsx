import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function QueueDisplay({ currentQueueNumber }) {
  const [queue, setQueue] = useState([]);
  const [nowServing, setNowServing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simplified query without orderBy to avoid index requirement
    const fetchQueue = async () => {
      try {
        const q = query(
          collection(db, 'appointments'),
          where('status', 'in', ['pending', 'processing'])
        );
        const snapshot = await getDocs(q);
        const queueData = [];
        snapshot.forEach((doc) => {
          queueData.push({ id: doc.id, ...doc.data() });
        });
        
        // Sort manually
        const sortedQueue = queueData.sort((a, b) => {
          if (a.isPriority && !b.isPriority) return -1;
          if (!a.isPriority && b.isPriority) return 1;
          return (a.queueNumber || 999) - (b.queueNumber || 999);
        });
        
        setQueue(sortedQueue);
        const serving = sortedQueue.find(a => a.status === 'processing');
        setNowServing(serving);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching queue:', error);
        setLoading(false);
      }
    };
    
    fetchQueue();
  }, []);

  const getPositionInQueue = () => {
    if (!currentQueueNumber) return null;
    const index = queue.findIndex(a => a.queueNumber === currentQueueNumber);
    return index !== -1 ? index + 1 : null;
  };

  if (loading) {
    return (
      <div className="card">
        <h3>Current Queue Status</h3>
        <p>Loading queue...</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>Current Queue Status</h3>
      {nowServing && (
        <div className="waiting-time">
          <strong>Now Serving:</strong> Queue #{nowServing.queueNumber}
          <br />
          <small>{nowServing.documentType}</small>
        </div>
      )}
      
      {currentQueueNumber && (
        <div style={{ marginTop: '15px' }}>
          <strong>Your Position:</strong>{' '}
          {getPositionInQueue() ? `#${getPositionInQueue()} in line` : 'Not in queue'}
          <br />
          <strong>People ahead:</strong> {getPositionInQueue() ? getPositionInQueue() - 1 : 0}
        </div>
      )}
      
      <div style={{ marginTop: '15px' }}>
        <strong>People waiting:</strong> {queue.length}
      </div>
    </div>
  );
}

export default QueueDisplay;