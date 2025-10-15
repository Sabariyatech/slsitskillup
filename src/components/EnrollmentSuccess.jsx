import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Phone, Mail, MessageCircle, X } from 'lucide-react'

const EnrollmentSuccess = ({ isOpen, onClose, studentData, course }) => {
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
            className="relative max-w-md w-full bg-gradient-to-br from-green-900 to-blue-900 rounded-2xl overflow-hidden shadow-2xl border border-green-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="h-8 w-8 text-white" />
              </motion.div>

              <h2 className="text-2xl font-bold text-white mb-2">Enrollment Request Submitted!</h2>
              <p className="text-green-200 mb-6">
                Thank you {studentData?.name}! Your enrollment request for <strong>{course?.title}</strong> has been received.
              </p>

              <div className="bg-white/10 rounded-xl p-4 mb-6 text-left">
                <h3 className="text-white font-semibold mb-3">What's Next?</h3>
                <ul className="text-green-200 text-sm space-y-2">
                  <li>• Our team will contact you within 24 hours</li>
                  <li>• We'll discuss payment options and schedule</li>
                  <li>• You'll receive course materials and access</li>
                  <li>• Classes start as per the batch schedule</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-white font-semibold">Contact Us Directly:</h3>
                
                <div className="flex space-x-2">
                  <a
                    href="tel:+919652557187"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </a>
                  
                  <a
                    href="https://wa.me/919652557187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                  
                  <a
                    href="https://wa.me/919652557187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <p className="text-green-300 text-xs mt-4">
                Reference ID: ENR-{Date.now().toString().slice(-6)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EnrollmentSuccess