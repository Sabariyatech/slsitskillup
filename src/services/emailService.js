import emailjs from '@emailjs/browser'

// EmailJS Configuration
const EMAIL_CONFIG = {
  serviceId: 'service_slsit',
  templateId: 'template_enrollment', 
  publicKey: 'your_public_key_here'
}

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.publicKey)

export const sendEnrollmentEmail = async (enrollmentData) => {
  try {
    const templateParams = {
      to_email: 'yallaposibabu303@gmail.com',
      student_name: enrollmentData.name,
      student_email: enrollmentData.email,
      student_phone: enrollmentData.phone,
      student_address: enrollmentData.address,
      student_qualification: enrollmentData.qualification,
      student_experience: enrollmentData.experience || 'Not specified',
      course_title: enrollmentData.course,
      course_price: enrollmentData.price,
      enrollment_date: new Date().toLocaleDateString(),
      reference_id: `ENR-${Date.now().toString().slice(-6)}`
    }

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    )

    return { success: true, referenceId: templateParams.reference_id }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error.message }
  }
}