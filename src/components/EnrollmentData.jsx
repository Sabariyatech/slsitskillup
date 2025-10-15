import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const EnrollmentData = ({ isOpen, onClose, studentData, course }) => {
  const [copied, setCopied] = useState(false)

  const enrollmentText = `NEW COURSE ENROLLMENT

Course: ${course?.title}
Price: ${course?.price}

Student Details:
Name: ${studentData?.name}
Email: ${studentData?.email}
Phone: ${studentData?.phone}
Address: ${studentData?.address}
Qualification: ${studentData?.qualification}
Experience: ${studentData?.experience || 'Not specified'}

Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(enrollmentText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
            className="relative max-w-lg w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
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
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-white mb-2">Enrollment Received!</h2>
                <p className="text-green-200">Copy the details below and send to yallaposibabu303@gmail.com</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 mb-4 border border-white/10">
                <pre className="text-green-300 text-sm whitespace-pre-wrap font-mono">
                  {enrollmentText}
                </pre>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={copyToClipboard}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  <Copy className="h-4 w-4" />
                  <span>{copied ? 'Copied!' : 'Copy Details'}</span>
                </button>

                <a
                  href={`https://wa.me/919652557187?text=${encodeURIComponent(enrollmentText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Fast Reply</span>
                </a>
              </div>

              <p className="text-blue-300 text-xs text-center mt-4">
                We'll contact you within 24 hours after receiving your details
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EnrollmentData