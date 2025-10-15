import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, TrendingUp, BookOpen, Clock, CheckCircle, Star, ArrowRight, Briefcase, Trophy, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const CRTPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const crtFeatures = [
    {
      icon: Target,
      title: "Campus Recruitment Training",
      description: "Comprehensive training program designed specifically for campus placements",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Briefcase,
      title: "Industry-Ready Skills",
      description: "Technical and soft skills training aligned with industry requirements",
      color: "text-green-500", 
      bgColor: "bg-green-500/10"
    },
    {
      icon: Trophy,
      title: "Placement Guarantee",
      description: "100% placement assistance with top-tier companies and startups",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    }
  ]

  const trainingModules = [
    {
      title: "Technical Skills Development",
      duration: "8 weeks",
      topics: ["Data Structures & Algorithms", "System Design", "Database Management", "Programming Languages", "Problem Solving"],
      icon: BookOpen,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Aptitude & Reasoning",
      duration: "4 weeks", 
      topics: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Analytical Skills", "Time Management"],
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Soft Skills & Communication",
      duration: "3 weeks",
      topics: ["Communication Skills", "Presentation Skills", "Group Discussions", "Leadership", "Team Building"],
      icon: Users,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Interview Preparation",
      duration: "2 weeks",
      topics: ["Mock Interviews", "HR Rounds", "Technical Interviews", "Resume Building", "Confidence Building"],
      icon: Target,
      gradient: "from-blue-500 to-purple-500"
    }
  ]

  const successStats = [
    { number: "500+", label: "Students Placed", icon: Users },
    { number: "150+", label: "Partner Companies", icon: Briefcase },
    { number: "₹8.5L", label: "Highest Package", icon: Trophy },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ]

  const companies = [
    "TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "HCL", "Tech Mahindra", "Capgemini",
    "IBM", "Microsoft", "Amazon", "Google", "Flipkart", "Paytm", "Zomato", "Swiggy"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-yellow-900/30 to-green-900/30" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex justify-center mb-8"
            >
              <div className="glass-effect rounded-full px-8 py-4 flex items-center space-x-3">
                <div className="chapter-number w-12 h-12">CRT</div>
                <span className="text-yellow-600 font-bold text-xl">Campus Recruitment Training</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="text-yellow-600">Your Gateway to</span>
              <span className="block text-gradient">Dream Career</span>
            </h1>

            <p className="text-2xl text-orange-700 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform from a student to a professional with our comprehensive Campus Recruitment Training program. 
              Get placed in top companies with guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-professional text-lg px-10 py-4"
                >
                  Enroll in CRT Program
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('/brochure.pdf', '_blank')}
                className="btn-secondary text-lg px-10 py-4"
              >
                Download Brochure
              </motion.button>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {successStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  className="story-card glass-effect rounded-xl p-6 text-center"
                >
                  <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-yellow-600 mb-1">{stat.number}</div>
                  <div className="text-orange-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CRT Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-yellow-600 mb-6">
              Why Choose <span className="story-gradient">CRT Program?</span>
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Our Campus Recruitment Training is designed to bridge the gap between academic learning and industry requirements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {crtFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`story-card glass-effect rounded-2xl p-8 ${feature.bgColor} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                <div className="relative z-10 text-center">
                  <feature.icon className={`h-16 w-16 ${feature.color} mx-auto mb-6`} />
                  <h3 className="text-2xl font-bold text-yellow-600 mb-4">{feature.title}</h3>
                  <p className="text-orange-700 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-pattern-story opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-yellow-600 mb-6">
              Comprehensive <span className="professional-gradient">Training Modules</span>
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              17-week intensive program covering all aspects of campus recruitment preparation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="story-card glass-effect rounded-2xl p-8 professional-hover"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.gradient} rounded-full flex items-center justify-center mr-4`}>
                    <module.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-600">{module.title}</h3>
                    <div className="flex items-center text-orange-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-orange-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-yellow-600 mb-6">
              Our <span className="story-gradient">Placement Partners</span>
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Get placed in top companies across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="glass-effect rounded-xl p-4 text-center professional-hover"
              >
                <div className="text-yellow-600 font-bold text-sm">{company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center glass-effect rounded-3xl p-12 bg-gradient-to-br from-orange-500/10 to-green-500/10"
          >
            <h3 className="text-4xl font-bold text-yellow-600 mb-6">
              Ready to Start Your <span className="story-gradient">Success Journey?</span>
            </h3>
            <p className="text-xl text-orange-700 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who transformed their careers through our CRT program. 
              Your dream job is just one decision away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-professional text-lg px-10 py-4 flex items-center space-x-3"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('tel:+918919685634', '_self')}
                className="btn-secondary text-lg px-10 py-4"
              >
                Schedule Counseling
              </motion.button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-orange-600">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span>4.9/5 Student Rating</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>100% Placement Assistance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CRTPage