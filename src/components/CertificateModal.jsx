import { motion, AnimatePresence } from 'framer-motion'
import { X, Award, Clock, BookOpen } from 'lucide-react'

const CertificateModal = ({ isOpen, onClose, courseId, course }) => {
  const certificates = {
    1: '/src/assets/sample_certificates/PYTHON_Fullstack.png',
    2: '/src/assets/sample_certificates/JAVA_Fullstack.png',
    3: '/src/assets/sample_certificates/Data_Science_and_AI.png',
    4: '/src/assets/sample_certificates/MERN_STACK (Fullstack_webdevelopment).png',
    5: '/src/assets/sample_certificates/Mobile_App_Development.png',
    6: '/src/assets/sample_certificates/Devops_and_cloud.png',
    7: '/src/assets/sample_certificates/Cybersecurity_Fundamentals.png',
    8: '/src/assets/sample_certificates/UI_UX_Design_Mastery.png',
    9: '/src/assets/sample_certificates/Digital_Marketing.png'
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
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full text-red-400 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="flex flex-col md:flex-row h-auto md:h-[85vh]">
              {/* Certificate - Left */}
              <div className="flex-1 p-4 md:p-6">
                <div className="bg-slate-700 rounded-xl h-64 md:h-full flex items-center justify-center">
                  <img
                    src={certificates[courseId]}
                    alt="Certificate"
                    className="w-full h-auto max-h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Course Info - Right */}
              <div className="w-full md:w-80 p-4 md:p-6 space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-yellow-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Sample Certificate</h3>
                    <p className="text-blue-200 text-sm">{course?.title}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-blue-200 text-sm">Duration</p>
                      <p className="text-white font-semibold">{course?.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-blue-200 text-sm">Modules</p>
                      <p className="text-white font-semibold">{course?.modules} Modules</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-white font-semibold mb-3">Skills You'll Gain</h4>
                  <div className="flex flex-wrap gap-2">
                    {course?.skills?.slice(0, 6).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20">
                  <p className="text-yellow-200 text-sm font-semibold mb-2">📋 Note:</p>
                  <p className="text-white text-sm leading-relaxed">
                    This is a sample certificate. Upon successful completion of the course, 
                    you will receive an official certificate with your name and completion details.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CertificateModal