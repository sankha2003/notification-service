const notifications = {};

function logDelivery(type, message) {
  console.log(`[${type.toUpperCase()}] Notification sent: ${message}`);
}

async function sendNotification(userId, type, message) {
  if (!['email', 'sms', 'in-app'].includes(type)) {
    throw new Error('Unsupported notification type');
  }

  // Simulated retry logic
  let attempts = 0;
  const maxAttempts = 3;
  let success = false;

  while (!success && attempts < maxAttempts) {
    attempts++;
    try {
      logDelivery(type, message);
      success = true;
    } catch (e) {
      console.log(`Attempt ${attempts} failed`);
      if (attempts === maxAttempts) throw e;
    }
  }

  if (!notifications[userId]) notifications[userId] = [];
  notifications[userId].push({ type, message, timestamp: new Date() });
}

function getUserNotifications(userId) {
  return notifications[userId] || [];
}

module.exports = {
  sendNotification,
  getUserNotifications,
};
