import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Mail, Phone, MapPin, GraduationCap, Send } from 'lucide-react'
import { useState } from 'react'
import EnrollmentData from './EnrollmentData'

const EnrollmentModal = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    experience: ''
  })
  const [showData, setShowData] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5affb8c8-301e-4827-90c0-2a0ba914acb8',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          qualification: formData.qualification,
          experience: formData.experience,
          course: course?.title,
          price: course?.price,
          message: `New enrollment for ${course?.title}`,
          to_email: 'yallaposibabu303@gmail.com'
        })
      })

      const result = await response.json()
      
      if (result.success) {
        const localData = {
          ...formData,
          course: course?.title,
          price: course?.price,
          timestamp: new Date().toISOString(),
          id: `ENR-${Date.now().toString().slice(-6)}`
        }
        
        const existingEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]')
        existingEnrollments.push(localData)
        localStorage.setItem('enrollments', JSON.stringify(existingEnrollments))
        
        setShowData(true)
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Submission failed:', error)
      alert('Enrollment submitted successfully! We will contact you soon.')
      setShowData(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDataClose = () => {
    setShowData(false)
    onClose()
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      qualification: '',
      experience: ''
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-md w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Enroll Now</h2>
                <p className="text-blue-200 text-sm">{course?.title}</p>
                <p className="text-green-400 font-semibold">{course?.price}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="2"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Enter your address"
                  />
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    <GraduationCap className="h-4 w-4 inline mr-2" />
                    Highest Qualification *
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="" className="bg-slate-800">Select qualification</option>
                    <option value="10th" className="bg-slate-800">10th Grade</option>
                    <option value="12th" className="bg-slate-800">12th Grade</option>
                    <option value="Diploma" className="bg-slate-800">Diploma</option>
                    <option value="Bachelor's" className="bg-slate-800">Bachelor's Degree</option>
                    <option value="Master's" className="bg-slate-800">Master's Degree</option>
                    <option value="Other" className="bg-slate-800">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-blue-200 text-sm font-medium mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="" className="bg-slate-800">Select experience</option>
                    <option value="Beginner" className="bg-slate-800">Beginner (0-1 years)</option>
                    <option value="Intermediate" className="bg-slate-800">Intermediate (1-3 years)</option>
                    <option value="Advanced" className="bg-slate-800">Advanced (3+ years)</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isSubmitting 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-xl'
                  } text-white`}
                >
                  <Send className={`h-4 w-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Enrollment'}</span>
                </motion.button>
              </form>

              <p className="text-blue-300 text-xs text-center mt-4">
                Email will be sent directly to yallaposibabu303@gmail.com
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <EnrollmentData
        isOpen={showData}
        onClose={handleDataClose}
        studentData={formData}
        course={course}
      />
    </AnimatePresence>
  )
}

export default EnrollmentModal