
/**
 * @file mailer.js
 * @author Brendan Dileo
 * Sets up email sending functionality using NodeMailer to automatically send emails upon submission of the contact form.
 */

const nodemailer = require('nodemailer');
require('dotenv').config();

// Node Mailer Transporter setup
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Sends an email
const sendEmail = async (name, email, phone, comment) => {
    try {
        const info = await transporter.sendMail({
            from: `"New Submission" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: 'New Contact Form Submission',
            text: `You have a new submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nComment: ${comment}`,
            html: `<b>You have a new submission:</b><br><br><b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br><b>Comment:</b> ${comment}`,
        });
        console.log('Email Sent Successfully: ', info.messageId);
        return true;            // Success
    } catch (error) {
        console.error('An error occurred while sending the email: ', error.message);
        return false;           // Fail
    }
};

module.exports = { sendEmail };