import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Smartphone, Brain, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description: "Master modern programming languages and frameworks",
      color: "from-blue-500 to-cyan-500",
      courseId: 1
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Learn data analysis, machine learning, and AI",
      color: "from-purple-500 to-pink-500",
      courseId: 2
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile apps",
      color: "from-orange-500 to-red-500",
      courseId: 3
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect systems and data from digital threats",
      color: "from-red-500 to-pink-500",
      courseId: 4
    },
    {
      icon: Globe,
      title: "Cloud Computing & DevOps",
      description: "Master cloud platforms and deployment automation",
      color: "from-green-500 to-teal-500",
      courseId: 5
    },
    {
      icon: Brain,
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly digital experiences",
      color: "from-indigo-500 to-purple-500",
      courseId: 6
    }
  ]

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Specializations</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of technology domains and find your passion. 
            Each program is designed to make you industry-ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="glass-effect rounded-2xl p-8 h-full relative overflow-hidden transform-gpu transition-all duration-300 group-hover:bg-white/10">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                  animate={{ 
                    background: [
                      `linear-gradient(45deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
                      `linear-gradient(135deg, ${feature.color.split(' ')[3]}, ${feature.color.split(' ')[1]})`,
                      `linear-gradient(225deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-blue-200 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mb-4`}
                  />

                  <Link to={`/course/${feature.courseId}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-300 hover:text-white font-medium text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                    >
                      <span>Learn More</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/courses">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Explore All Programs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Features