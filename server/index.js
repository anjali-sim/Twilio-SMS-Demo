import express from 'express';
import bodyParser from 'body-parser';
import process from 'process';
import 'dotenv/config';
import cors from 'cors'; 

import twilio from 'twilio';

const app = express();
const PORT = 3001;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
  }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post('/api/send-sms', (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      body: body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    })
    .then((message) => {
      console.log(`SMS sent with SID: ${message.sid}`);
      res.json({ success: true });
    })
    .catch((error) => {
      console.error('Error sending SMS:', error);
      res.status(500).json({ success: false, error: error.message });
    });
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
