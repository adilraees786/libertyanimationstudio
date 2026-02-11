const express = require("express");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Liberaty Animation Studio Backend is running perfectly!");
});

/* ================= DATABASE ================= */

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "liberaty-animation-studio",
  waitForConnections: true,
  connectionLimit: 10,
});

/* ================= MAIL CONFIG ================= */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready ✅");
  }
});

/* ================= CONTACT ROUTE ================= */

app.post("/api/contact", async (req, res) => {
  const {
    fullName,
    email,
    phone,
    social,
    brandDescription,
    packageType,
    challenge,
  } = req.body;

  if (!fullName || !email || !packageType) {
    return res
      .status(400)
      .json({ error: "Full Name, Email, and Package are required" });
  }

  /* ================= ADMIN EMAIL ================= */

  const adminHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f7;
        font-family: Arial, Helvetica, sans-serif;
      }
      .email-wrapper {
        width: 100%;
        background-color: #f4f4f7;
        padding: 20px 0;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        border: 1px solid #eaeaea;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      }
      .email-header {
        background-color: #000000;
        padding: 30px 20px;
        text-align: center;
      }
      .email-header h1 {
        color: #F46801;
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .email-header p {
        color: #ffffff;
        font-size: 14px;
        margin: 5px 0 0 0;
      }
      .email-body {
        padding: 40px 30px;
      }
      .section-title {
        font-size: 18px;
        color: #000000;
        border-left: 4px solid #F46801;
        padding-left: 15px;
        margin: 0 0 25px 0;
      }
      .details-table {
        width: 100%;
        font-size: 15px;
        line-height: 1.5;
        color: #333333;
      }
      .details-table td {
        padding: 8px 0;
      }
      .details-table .label {
        width: 35%;
        font-weight: bold;
        color: #F46801;
      }
      .details-table .value {
        border-bottom: 1px solid #f9f9f9;
      }
      .info-box {
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        font-size: 14px;
        color: #555555;
        line-height: 1.6;
        margin-top: 10px;
      }
      .email-footer {
        background-color: #000000;
        padding: 20px;
        text-align: center;
        color: #888888;
        font-size: 12px;
      }
      .email-footer p {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-container">
        <!-- Header -->
        <div class="email-header">
          <h1>New Inquiry</h1>
          <p>Liberaty Animation Studio</p>
        </div>
        
        <!-- Body -->
        <div class="email-body">
          <h2 class="section-title">Client Details</h2>
          <table class="details-table">
            <tr>
              <td class="label">Full Name:</td>
              <td class="value">${fullName}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td class="value">${email}</td>
            </tr>
            <tr>
              <td class="label">Phone:</td>
              <td class="value">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td class="label">Social/Web:</td>
              <td class="value">${social || "N/A"}</td>
            </tr>
            <tr>
              <td class="label">Package:</td>
              <td style="font-weight: bold; color: #000000;">${packageType}</td>
            </tr>
          </table>
          
          <h2 class="section-title" style="margin-top: 35px;">Brand Description</h2>
          <div class="info-box">
            ${brandDescription || "No description provided."}
          </div>
          
          <h2 class="section-title" style="margin-top: 30px;">Content Challenges</h2>
          <div class="info-box">
            ${challenge || "No challenges specified."}
          </div>
        </div>
        
        <!-- Footer -->
        <div class="email-footer">
          <p>&copy; ${new Date().getFullYear()} Liberaty Animation Studio. All rights reserved.</p>
          <p style="margin-top: 5px;">This inquiry was sent from your website contact form.</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  /* ================= USER EMAIL ================= */

  const userHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f7;
        font-family: Arial, Helvetica, sans-serif;
      }
      .email-wrapper {
        width: 100%;
        background-color: #f4f4f7;
        padding: 20px 0;
      }
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }
      .email-header {
        background: linear-gradient(to right, #000000, #F46801);
        padding: 50px 20px;
        text-align: center;
      }
      .email-header h1 {
        color: #ffffff;
        font-size: 28px;
        font-weight: 700;
        margin: 0;
        letter-spacing: 1px;
      }
      .email-body {
        padding: 50px 40px;
        text-align: center;
      }
      .email-body h2 {
        font-size: 22px;
        color: #000000;
        margin: 0 0 20px 0;
      }
      .email-body p {
        font-size: 16px;
        color: #444444;
        line-height: 1.6;
        margin: 0 0 25px 0;
      }
      .cta-button {
        display: inline-block;
        background-color: #F46801;
        color: #ffffff;
        padding: 15px 35px;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        border-radius: 6px;
        margin: 10px 0 40px 0;
      }
      .quote {
        font-size: 14px;
        color: #999999;
        font-style: italic;
        margin: 0;
      }
      .email-footer {
        background-color: #000000;
        padding: 40px 20px;
        text-align: center;
      }
      .email-footer .brand-name {
        color: #ffffff;
        font-size: 16px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }
      .email-footer .social-links {
        color: #888888;
        font-size: 13px;
        margin: 0;
      }
      .email-footer .social-links a {
        color: #F46801;
        text-decoration: none;
        font-weight: bold;
      }
      .email-footer .copyright {
        color: #555555;
        font-size: 11px;
        margin: 25px 0 0 0;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-container">
        <!-- Header -->
        <div class="email-header">
          <h1>Hello, ${fullName}!</h1>
        </div>
        
        <!-- Body -->
        <div class="email-body">
          <h2>We've Got Your Message! 🚀</h2>
          <p>
            Thank you for reaching out to <strong>Liberaty Animation Studio</strong>. 
            We're excited about your interest in our <strong>${packageType}</strong>.
          </p>
          <p>
            Our creative team is already looking over your details. One of our producers 
            will be in touch with you within 24 business hours to discuss how we can 
            bring your vision to life.
          </p>
          <a href="https://liberatyanimationstudio.com" class="cta-button">Explore Our Portfolio</a>
          <p class="quote">"Your brand deserves to be unmissable."</p>
        </div>
        
        <!-- Footer -->
        <div class="email-footer">
          <p class="brand-name">Liberaty Animation Studio</p>
          <p class="social-links">
            Follow our journey on 
            <a href="#">Instagram</a> & 
            <a href="#">LinkedIn</a>
          </p>
          <p class="copyright">
            &copy; ${new Date().getFullYear()} Liberaty Animation Studio. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  const adminMail = {
    from: `"${fullName} (Website)" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `🔥 New Project Inquiry: ${fullName} - ${packageType}`,
    html: adminHtml,
  };

  const userMail = {
    from: `"Liberaty Animation Studio" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `We've received your inquiry, ${fullName}! 🚀`,
    html: userHtml,
  };

  try {
    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    const sql =
      "INSERT INTO contact_messages (name,email,phone,social,brand_description,package_type,challenge) VALUES (?,?,?,?,?,?,?)";

    pool.query(sql, [
      fullName,
      email,
      phone,
      social,
      brandDescription,
      packageType,
      challenge,
    ]);

    res.status(200).json({ message: "Message sent successfully ✅" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});