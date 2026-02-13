const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors());
app.use(express.json());


// Serve frontend static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist')));

// MySQL Connection Pool (Better for Vercel/Serverless)
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'liberaty-animation-studio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 5000 // 5 seconds timeout
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/api/contact', (req, res) => {
    res.send('Contact API is working');
});


app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, social, brandDescription, packageType, challenge } = req.body;

    // Validations
    if (!fullName || !email || !packageType) {
        return res.status(400).json({ error: 'Full Name, Email, and Package are required' });
    }

    // 1. Priority: Send Email to Admin (You)
    const mailOptions = {
        from: `"${fullName} (${email})" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.RECEIVER_EMAIL,
        subject: `Liberty Animation Studio - New Request from ${fullName} - ${packageType}`,
        text: `
        New Message from Liberty Animation Studio Website:

        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Website/Social: ${social || 'N/A'}
        Package Interested In: ${packageType}

        Brand Description:
        ${brandDescription || 'N/A'}

        Content Challenges:
        ${challenge || 'N/A'}
        `
    };

    // 2. Auto-Reply to User
    const autoReplyOptions = {
        from: `"Liberty Animation Studio" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank you for reaching out, ${fullName}!`,
        text: `Hi ${fullName},\n\nThank you for contacting Liberty Animation Studio. We have received your inquiry about the ${packageType} and will get back to you as soon as possible.\n\nBest Regards,\nLiberty Animation Studio`
    };

    try {
        // Send both emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(autoReplyOptions); 
        console.log('Both emails (Admin & User) sent successfully');

        // 3. Secondary: Save to Database (Optional)
        // Note: You need to update your database schema to include these new columns
        const sql = "INSERT INTO contact_messages (name, email, phone, social, brand_description, package_type, challenge) VALUES (?, ?, ?, ?, ?, ?, ?)";
        pool.query(sql, [fullName, email, phone, social, brandDescription, packageType, challenge], (dbErr) => {
            if (dbErr) {
                console.error('Database Error (Skipped):', dbErr.message);
                // We still return 200 because emails were sent successfully
            } else {
                console.log('Message saved to database');
            }
        });

        res.status(200).json({ message: 'Message sent successfully' });

    } catch (emailError) {
        console.error('Email Error:', emailError);
        res.status(500).json({ error: 'Failed to send email. please try again.' });
    }
});

// Catch-all: serve index.html for any other requests (React routing)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 1008;
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
    console.log(`Frontend and Backend both active on port ${PORT}`);
});
