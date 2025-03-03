const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kailasamm5107@gmail.com',
        pass: 'Kailasam9108@',
    },
});

// Registration endpoint
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;

    // Here, add code to save the user to your database

    // Email options
    const mailOptions = {
        from: 'kailasam5107@gmail.com',
        to: email,
        subject: 'Registration Successful',
        text: `Hello ${name},\n\nThank you for registering.\n\nBest regards,\nYour Company`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Error sending email', error });
        }
        res.status(200).json({ success: true, message: 'Registration successful, email sent' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
