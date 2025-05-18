const express = require('express');
const router = express.Router();
const notificationService = require('../services/notificationService');

router.post('/', async (req, res) => {
  const { userId, type, message } = req.body;
  try {
    await notificationService.sendNotification(userId, type, message);
    res.status(200).json({ success: true, message: 'Notification sent' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
