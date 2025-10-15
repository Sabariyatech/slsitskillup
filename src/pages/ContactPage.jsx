import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, Users } from 'lucide-react'

const ContactPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', course: '', message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 8919685634 / +91 8688973054",
      description: "Mon-Sat 9AM-6PM",
      color: "from-green-500 to-emerald-500",
      bg: "bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop')] bg-cover bg-center",
      action: () => window.open('tel:+918919685634', '_self')
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "Contactslsit1@gmail.com",
      description: "We reply within 24 hours",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-[url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop')] bg-cover bg-center",
      action: () => window.open('mailto:Contactslsit1@gmail.com', '_blank')
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Guntur, Andhra Pradesh",
      description: "Open campus tours available",
      color: "from-purple-500 to-pink-500",
      bg: "bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop')] bg-cover bg-center",
      action: () => window.open('https://maps.google.com/?q=Guntur+Andhra+Pradesh', '_blank')
    }
  ]

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Basic computer knowledge and dedication to learn. No prior programming experience required for beginner courses."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we have a dedicated placement cell with 95% success rate and partnerships with 50+ companies."
    },
    {
      question: "Are the courses available online?",
      answer: "We offer both online and offline modes. Online classes include live sessions and recorded lectures."
    },
    {
      question: "What is the refund policy?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course quality."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your career? Get in touch with our expert team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose your preferred way to connect with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={method.action}
                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
              >
                <div className={`absolute inset-0 ${method.bg}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-60`} />
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <method.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-xl text-blue-100 font-semibold mb-2">{method.details}</p>
                  <p className="text-blue-200 text-sm">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl" />
              <div className="glass-effect rounded-2xl p-8 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Send us a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-blue-100">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-blue-100 text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-blue-100 text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-blue-100 text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <label className="block text-blue-100 text-sm font-medium mb-2">Interested Course</label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                        >
                          <option value="" className="bg-gray-800">Select a course</option>
                          <option value="fullstack" className="bg-gray-800">Full Stack Development</option>
                          <option value="datascience" className="bg-gray-800">Data Science & ML</option>
                          <option value="mobile" className="bg-gray-800">Mobile App Development</option>
                          <option value="cybersecurity" className="bg-gray-800">Cybersecurity</option>
                          <option value="cloud" className="bg-gray-800">Cloud Computing</option>
                          <option value="uiux" className="bg-gray-800">UI/UX Design</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-blue-100 text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all resize-none"
                        placeholder="Tell us about your goals and how we can help you..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* FAQ & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              {/* FAQ */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-blue-400" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all"
                    >
                      <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                      <p className="text-blue-100 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-blue-400" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Monday - Saturday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Sunday</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Campus Visit */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-blue-400" />
                  Schedule Campus Visit
                </h3>
                <p className="text-blue-100 mb-4">
                  Experience our state-of-the-art facilities and meet our expert faculty in person.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open('tel:+918919685634', '_self')}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Book Campus Tour
                  </button>
                  <button 
                    onClick={() => window.open('https://wa.me/918919685634?text=Hi! I would like to schedule a campus visit at SLSIT Skillup.', '_blank')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp Us</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Find <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Our Location</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Visit our campus in Guntur, Andhra Pradesh
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122873.55469095!2d80.34495!3d16.2932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7999dd90f1e694!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <h3 className="text-xl font-bold text-white">Address</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    SLSIT Skillup<br />
                    Guntur, Andhra Pradesh<br />
                    India - 522001
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-6 w-6 text-green-400" />
                    <h3 className="text-xl font-bold text-white">Contact</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-blue-100">+91 8919685634</p>
                    <p className="text-blue-100">+91 8688973054</p>
                    <p className="text-blue-100">Contactslsit1@gmail.com</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">Timings</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-blue-100">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-blue-100">Sunday: Closed</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://maps.google.com/?q=Guntur+Andhra+Pradesh', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Get Directions</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage