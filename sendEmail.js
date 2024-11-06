require('dotenv').config();
const nodemailer = require ('nodemailer');

// Step 1: Configure the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'michaellovescode278@gmail.com',
    pass:'bguefbubueiub'
  }
});

// Step 2: Set up email options
const mailOptions = {
  from: process.env.EMAIL_USER, // Sender address
  to: 'mrfx204@gmail.com', // Recipient
  subject: 'Test Email from Node.js', // Subject
  text: 'This is a test email sent from Node.js!' // Body
};

// Step 3: Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
