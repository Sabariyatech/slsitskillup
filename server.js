const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail
    pass: 'your-app-password'     // Replace with your Gmail app password
  }
})

app.post('/api/send-enrollment', async (req, res) => {
  try {
    const { name, email, phone, address, qualification, experience, course, price } = req.body

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'yallaposibabu303@gmail.com',
      subject: `New Course Enrollment - ${course}`,
      html: `
        <h2>New Course Enrollment Request</h2>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Price:</strong> ${price}</p>
        
        <h3>Student Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Experience:</strong> ${experience || 'Not specified'}</p>
        
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})