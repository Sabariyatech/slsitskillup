import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'CRT Program', href: '/crt' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '#' }
  ]

  const courses = [
    { name: 'Web Development', href: '/course/1' },
    { name: 'Data Science', href: '/course/2' },
    { name: 'Mobile Development', href: '/course/3' },
    { name: 'Cybersecurity', href: '/course/4' },
    { name: 'Cloud Computing', href: '/course/5' },
    { name: 'UI/UX Design', href: '/course/6' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ]

  return (
    <footer className="relative bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">SLSIT Skillup</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Empowering students with industry-relevant skills and practical knowledge 
              to excel in their careers and make a meaningful impact in the tech world.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-100">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@slsitskillup.in</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>SLSIT Campus, Bangalore</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={course.href}
                    className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full" />
                    <span>{course.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Stay Updated</h3>
            <p className="text-blue-100 text-sm">
              Subscribe to our newsletter for the latest updates on courses, 
              events, and industry insights.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-r-lg text-white font-medium hover:shadow-lg transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-100 ${social.color} transition-all hover:bg-white/20`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © 2024 SLSIT Skillup. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
        />
      </div>
    </footer>
  )
}

export default Footer