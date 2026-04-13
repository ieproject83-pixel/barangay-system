// Queueing Theory calculations based on your research paper

// Mean Service Time from Time and Motion Study (8-12 minutes)
// Using average of 10 minutes = 0.1667 hours
const MEAN_SERVICE_TIME_MINUTES = 10; // 8-12 minute average
const MEAN_SERVICE_RATE_PER_HOUR = 60 / MEAN_SERVICE_TIME_MINUTES; // 6 customers per hour

// Number of servers (barangay staff)
const NUMBER_OF_SERVERS = 2; // s = 2 (typical barangay hall)

/**
 * Calculate M/M/s queueing theory metrics
 * @param {number} arrivalRate - Customers per hour (λ)
 * @param {number} serviceRate - Customers per hour per server (μ)
 * @param {number} servers - Number of servers (s)
 */
export const calculateQueueMetrics = (arrivalRate, serviceRate = MEAN_SERVICE_RATE_PER_HOUR, servers = NUMBER_OF_SERVERS) => {
  // Traffic intensity (ρ) - must be < 1 for stability
  const utilization = arrivalRate / (servers * serviceRate);
  
  // Probability that system is empty (P0)
  let sum = 0;
  for (let n = 0; n < servers; n++) {
    sum += Math.pow(arrivalRate / serviceRate, n) / factorial(n);
  }
  const lastTerm = Math.pow(arrivalRate / serviceRate, servers) / (factorial(servers) * (1 - utilization));
  const p0 = 1 / (sum + lastTerm);
  
  // Average number in queue (Lq)
  const lq = (Math.pow(arrivalRate / serviceRate, servers) * utilization * p0) / 
             (factorial(servers) * Math.pow(1 - utilization, 2));
  
  // Average waiting time in queue (Wq in hours)
  const wqHours = lq / arrivalRate;
  const wqMinutes = wqHours * 60;
  
  // Average time in system (Ws in minutes)
  const wsMinutes = wqMinutes + MEAN_SERVICE_TIME_MINUTES;
  
  // Average number in system (Ls)
  const ls = lq + arrivalRate / serviceRate;
  
  return {
    utilization: utilization * 100, // Percentage
    isStable: utilization < 1,
    averageWaitTimeMinutes: Math.round(wqMinutes),
    averageSystemTimeMinutes: Math.round(wsMinutes),
    averageQueueLength: Math.round(lq * 10) / 10,
    averageSystemLength: Math.round(ls * 10) / 10,
    probabilityEmpty: (p0 * 100).toFixed(1),
    recommendedSlotsPerHour: Math.floor(serviceRate * servers * 0.85) // 85% capacity
  };
};

/**
 * Calculate optimal appointment slots based on service time
 */
export const calculateOptimalSlots = () => {
  // Based on Mean Service Time of 8-12 minutes
  // Max 10 slots per hour to ensure stability (P < 1)
  const maxSlotsPerHour = Math.floor(60 / MEAN_SERVICE_TIME_MINUTES);
  const safeSlotsPerHour = Math.floor(maxSlotsPerHour * 0.85); // 85% utilization
  
  return {
    maxSlotsPerHour: maxSlotsPerHour,
    safeSlotsPerHour: safeSlotsPerHour,
    serviceTimeMinutes: MEAN_SERVICE_TIME_MINUTES,
    slotsPerDay: safeSlotsPerHour * 8, // 8 operating hours
    recommendation: `Maximum ${safeSlotsPerHour} appointments per hour to maintain system stability`
  };
};

/**
 * Calculate estimated wait time based on queue position
 */
export const calculateEstimatedWaitTime = (position, isPriority = false) => {
  // Priority customers wait only one service time
  if (isPriority) {
    return MEAN_SERVICE_TIME_MINUTES;
  }
  
  // Regular customers: position * service time / number of servers
  const estimatedMinutes = (position * MEAN_SERVICE_TIME_MINUTES) / NUMBER_OF_SERVERS;
  return Math.min(estimatedMinutes, 120); // Cap at 2 hours (as per research)
};

/**
 * Check if system is congested
 * Based on research: 12.1% of residents experience >30 minute waits
 */
export const isSystemCongested = (queueLength, servers = NUMBER_OF_SERVERS) => {
  const threshold = servers * 3; // Congestion when queue > 3x servers
  return queueLength > threshold;
};

/**
 * Get queue status message based on wait time
 */
export const getQueueStatusMessage = (estimatedWaitMinutes) => {
  if (estimatedWaitMinutes <= 10) {
    return { status: 'green', message: 'Short wait time', color: '#10b981' };
  } else if (estimatedWaitMinutes <= 30) {
    return { status: 'yellow', message: 'Moderate wait time', color: '#f59e0b' };
  } else {
    return { status: 'red', message: 'Long wait time expected', color: '#ef4444' };
  }
};

// Helper function for factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Export constants
export { MEAN_SERVICE_TIME_MINUTES, MEAN_SERVICE_RATE_PER_HOUR, NUMBER_OF_SERVERS };