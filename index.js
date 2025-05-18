const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notifications');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/notifications', notificationRoutes);

app.get('/users/:id/notifications', (req, res) => {
  const userId = req.params.id;
  const notifications = require('./services/notificationService').getUserNotifications(userId);
  res.json({ notifications });
});

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
