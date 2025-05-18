


#  Notification Service

A basic backend service implemented using Node.js and Express to send and handle notifications for users. It is capable of sending Email, SMS, and In-App notifications. The project is modular and can be made to utilize actual queues such as RabbitMQ or Kafka in the future.

---

##  Features

- Send notifications via **Email**, **SMS**, and **In-App**
- Retrieve all notifications for a given user
- Organized code using distinct routes and services
- Mocked retry logic for failed notifications
- Code is prepared to support queue-based delivery (such as RabbitMQ/Kafka)

---

## Tech Stack

- Node.js
- Express.js
- UUID for creating unique notification IDs

---

## Setup Instructions

How to run the project locally:

```bash
git clone https://github.com/your-username/notification-service.git
cd notification-service
npm install
-> How to Start the Server
bash
Copy
Edit
node index.js
Server will start at: http://localhost:3000

->API Endpoints
1. Send Notification
POST /notifications

Request Body:

json
Copy
Edit
{
  "userId": "1",
"type": "email",   // Options: email, sms, in-app
"message": "Welcome to our platform!"
}
Sample Response:

json
Copy
Edit
{
  "success": true,
  "message": "Notification sent"
}
2. Get Notifications for a User
GET /users/:id/notifications

Example: /users/1/notifications

Sample Response:

json
Copy
Edit
{
  "notifications": 
    {
      "type": "email",
      "message": "Welcome to our platform!",
      "timestamp": "2025-05-18T12:34:56.789Z"
    }
}


Start the server:

Body (JSON):

json
Copy
Edit
{
  "userId": "1",
  "type": "sms",
  "message": "Hello via SMS!"
}
b. Test Get Notifications:
Method: GET

URL: http://localhost:3000/users/1/notifications

->Notes and Assumptions
All data is in-memory, so it's temporary and resets when the server restarts.

The retry logic and queue functionality are faked for demonstration.

Real integration with services such as Twilio or SendGrid may be introduced later.

->Project Structure

notification-service/
│
├── index.js                  # Main entry point
├── routes/
│   └── notificationRoutes.js # API route handlers
├── services/
│   └── notificationService.js # Core business logic
├── utils/
│   └── retryHandler.js       # Retry logic simulation
└── README.md

->Future Enhancements
Implement RabbitMQ or Kafka for real queue handling

Put notifications in an actual database (MongoDB, MySQL, PostgreSQL)

Combine with real SMS/Email providers

Implement API docs with Swagger or Postman

Host on platforms such as Vercel, Railway, or AWS

