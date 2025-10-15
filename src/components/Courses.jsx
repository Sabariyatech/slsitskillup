import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import EnrollmentModal from './EnrollmentModal'

const Courses = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const handleEnrollClick = (course) => {
    setSelectedCourse(course)
    setIsEnrollmentOpen(true)
  }

  const courses = [
    {
      id: 1,
      title: "Python Fullstack Development",
      description: "Master fullstack development with Python, Django, React and PostgreSQL",
      duration: "6 months",
      students: "2.5K+",
      rating: 4.9,
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      tags: ["Python", "Django", "React"],
      level: "Intermediate",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Java Fullstack Development",
      description: "Build enterprise applications with Java Spring Boot and Angular",
      duration: "7 months",
      students: "1.8K+",
      rating: 4.8,
      price: "₹28,000",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      tags: ["Java", "Spring Boot", "Angular"],
      level: "Advanced",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Data Science & AI",
      description: "Master data analysis, machine learning and artificial intelligence",
      duration: "8 months",
      students: "1.5K+",
      rating: 4.7,
      price: "₹30,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Python", "TensorFlow", "Pandas"],
      level: "Advanced",
      gradient: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Popular <span className="animate-gradient-text">Courses</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted courses designed by industry experts. 
            Each course includes hands-on projects and real-world applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group card-hover"
            >
              <div className="glass-effect rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all duration-300 glow-border">
                {/* Course Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-500' :
                      course.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
                    } text-white shadow-lg`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs font-semibold">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${course.gradient} bg-opacity-20 text-white rounded-full text-xs font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-blue-200 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">{course.price}</span>
                      <span className="text-blue-200 text-sm ml-1">/ course</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEnrollClick(course)}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-medium text-sm hover:shadow-xl transition-all transform hover:scale-105"
                      >
                        Enroll
                      </button>
                      <Link
                        to={`/course/${course.id}`}
                        className={`bg-gradient-to-r ${course.gradient} text-white px-4 py-2 rounded-full font-medium text-sm flex items-center space-x-1 hover:shadow-xl transition-all transform hover:scale-105`}
                      >
                        <span>Details</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/courses"
            className="inline-flex items-center space-x-3 glass-effect text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover-lift"
          >
            <span>View All Courses</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        course={selectedCourse}
      />
    </section>
  )
}

export default Courses