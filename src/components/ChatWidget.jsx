import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, User } from 'lucide-react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  const agents = [
    {
      id: 1,
      name: "Admissions Team",
      role: "Course Enrollment & Information",
      phone: "+91 8919685634",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      status: "online"
    },
    {
      id: 2,
      name: "Placement Team", 
      role: "Career Guidance & CRT Program",
      phone: "+91 8688973054",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      status: "online"
    }
  ]

  const handleCall = (phone) => {
    window.open(`tel:${phone}`, '_self')
  }

  const handleWhatsApp = (phone, agentName) => {
    const message = `Hi! I'm interested in SLSIT Skillup programs. Can you help me with more information?`
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-80 glass-effect rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
              <h3 className="font-bold text-lg">Need Help?</h3>
              <p className="text-sm opacity-90">Choose an agent to connect with</p>
            </div>

            {/* Agents List */}
            <div className="p-4 space-y-3 bg-white/90 backdrop-blur-sm">
              {agents.map((agent) => (
                <motion.div
                  key={agent.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl p-4 shadow-sm border border-orange-100 hover:border-orange-300 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                      <img
                        src={agent.avatar}
                        alt={agent.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{agent.name}</h4>
                      <p className="text-sm text-gray-600">{agent.role}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCall(agent.phone)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md transition-all"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsApp(agent.phone, agent.name)}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 bg-gray-50 text-center">
              <p className="text-xs text-gray-600">Available 24/7 for your queries</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget