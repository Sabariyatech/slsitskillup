import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Calendar, Clock, BookOpen, CheckCircle, Target, Users } from 'lucide-react'
import { useState } from 'react'
import jsPDF from 'jspdf'

const SyllabusViewer = ({ isOpen, onClose, course }) => {
  const [activeWeek, setActiveWeek] = useState(null)

  if (!course) return null

  // Calculate weeks based on duration
  const getDurationInWeeks = (duration) => {
    const months = parseInt(duration.split(' ')[0])
    return months * 4 // 4 weeks per month
  }

  const totalWeeks = getDurationInWeeks(course.duration)

  // Generate weekly breakdown from curriculum
  const generateWeeklyBreakdown = () => {
    const weeks = []
    let currentWeek = 1
    
    course.curriculum.forEach((module, moduleIndex) => {
      const moduleDuration = parseInt(module.duration.split(' ')[0])
      const lessonsPerWeek = Math.ceil(module.lessons / moduleDuration)
      
      for (let i = 0; i < moduleDuration; i++) {
        const weekNumber = currentWeek + i
        const startLesson = i * lessonsPerWeek + 1
        const endLesson = Math.min((i + 1) * lessonsPerWeek, module.lessons)
        
        weeks.push({
          week: weekNumber,
          module: module.title,
          moduleIndex: moduleIndex + 1,
          lessons: `Lessons ${startLesson}-${endLesson}`,
          totalLessons: endLesson - startLesson + 1,
          topics: generateTopicsForWeek(module.title, i + 1),
          milestone: i === moduleDuration - 1 ? `Complete ${module.title}` : null
        })
      }
      currentWeek += moduleDuration
    })
    
    return weeks.slice(0, totalWeeks)
  }

  const generateTopicsForWeek = (moduleTitle, weekInModule) => {
    const topicMap = {
      'Python Programming Fundamentals': ['Variables & Data Types', 'Control Structures', 'Functions & Modules'],
      'Django Framework Basics': ['Models & Database', 'Views & Templates', 'URL Routing'],
      'React.js Frontend Development': ['Components & JSX', 'State Management', 'Hooks & Context'],
      'PostgreSQL Database Design': ['Schema Design', 'Queries & Joins', 'Performance Optimization'],
      'API Development & Integration': ['REST APIs', 'Authentication', 'Testing APIs'],
      'Authentication & Security': ['User Management', 'JWT Tokens', 'Security Best Practices'],
      'Deployment & DevOps': ['Server Setup', 'CI/CD Pipelines', 'Monitoring'],
      'Testing & Quality Assurance': ['Unit Testing', 'Integration Testing', 'Code Quality'],
      'Performance Optimization': ['Database Optimization', 'Caching Strategies', 'Load Testing'],
      'Real-world Projects': ['E-commerce Platform', 'Social Media App', 'Portfolio Website'],
      'Portfolio Development': ['Project Showcase', 'Documentation', 'Presentation Skills'],
      'Job Interview Preparation': ['Technical Interviews', 'System Design', 'Behavioral Questions']
    }
    
    const topics = topicMap[moduleTitle] || ['Core Concepts', 'Practical Implementation', 'Best Practices']
    return topics.slice(0, 3)
  }

  const weeklyBreakdown = generateWeeklyBreakdown()

  const downloadSyllabus = () => {
    // Course-specific PDF URLs
    const syllabusUrls = {
      'Full Stack Web Development': 'https://drive.google.com/uc?export=download&id=1auVpHojjt4ywlxfV9Dual6sj1N7bRsMm'
    }
    
    const pdfUrl = syllabusUrls[course.title]
    
    if (pdfUrl) {
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = `${course.title.replace(/\s+/g, '_')}_Syllabus.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white">{course.title} - Syllabus</h2>
                <p className="text-blue-200">{course.duration} • {totalWeeks} Weeks • {course.modules} Modules</p>
              </div>
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadSyllabus}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </motion.button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              {/* Course Overview */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-effect rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{totalWeeks}</div>
                  <div className="text-blue-200 text-sm">Weeks</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-effect rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{course.modules}</div>
                  <div className="text-blue-200 text-sm">Modules</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-effect rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{course.projects}</div>
                  <div className="text-blue-200 text-sm">Projects</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-effect rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{course.students}</div>
                  <div className="text-blue-200 text-sm">Students</div>
                </motion.div>
              </div>

              {/* Weekly Roadmap */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">Learning Roadmap</h3>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-blue-200">Click weeks to expand details</div>
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                  
                  {/* Timeline Glow Effect */}
                  <div className="absolute left-7.5 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm"></div>
                  
                  <div className="space-y-6">
                    {weeklyBreakdown.map((week, index) => (
                      <motion.div
                        key={week.week}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex items-start space-x-6"
                      >
                        {/* Timeline Node */}
                        <div className="relative z-10">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${
                              week.milestone 
                                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 shadow-yellow-500/30' 
                                : index % 3 === 0 
                                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/30'
                                  : index % 3 === 1
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500/30'
                                    : 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-500/30'
                            }`}
                          >
                            {week.week}
                          </motion.div>
                          {week.milestone && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                            >
                              <CheckCircle className="h-4 w-4 text-white" />
                            </motion.div>
                          )}
                        </div>

                        {/* Week Content */}
                        <motion.div
                          whileHover={{ scale: 1.02, y: -2 }}
                          className={`flex-1 glass-effect rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                            activeWeek === week.week ? 'ring-2 ring-blue-400/50 bg-white/10' : 'hover:bg-white/5'
                          }`}
                          onClick={() => setActiveWeek(activeWeek === week.week ? null : week.week)}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-white">
                              Week {week.week}: {week.module}
                            </h4>
                            <span className={`text-sm text-white px-3 py-1 rounded-full ${
                              week.moduleIndex % 3 === 1 ? 'bg-blue-500/30' :
                              week.moduleIndex % 3 === 2 ? 'bg-purple-500/30' : 'bg-green-500/30'
                            }`}>
                              Module {week.moduleIndex}
                            </span>
                          </div>
                          
                          <p className="text-blue-200 mb-3">{week.lessons} • {week.totalLessons} lessons</p>
                          
                          <AnimatePresence>
                            {activeWeek === week.week && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t border-white/10 pt-4 mt-4"
                              >
                                <h5 className="text-white font-medium mb-2">Topics Covered:</h5>
                                <div className="grid md:grid-cols-3 gap-2">
                                  {week.topics.map((topic, topicIndex) => (
                                    <motion.div 
                                      key={topicIndex} 
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: topicIndex * 0.1 }}
                                      className="flex items-center space-x-2"
                                    >
                                      <div className={`w-2 h-2 rounded-full ${
                                        topicIndex % 3 === 0 ? 'bg-blue-400' :
                                        topicIndex % 3 === 1 ? 'bg-purple-400' : 'bg-green-400'
                                      }`} />
                                      <span className="text-blue-100 text-sm">{topic}</span>
                                    </motion.div>
                                  ))}
                                </div>
                                {week.milestone && (
                                  <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-3 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <Target className="h-4 w-4 text-green-400" />
                                      <span className="text-green-300 font-medium">Milestone: {week.milestone}</span>
                                    </div>
                                  </motion.div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module Summary */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Module Overview</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.curriculum.map((module, index) => {
                    const moduleColor = index % 4 === 0 ? 'from-blue-500 to-cyan-500' :
                                       index % 4 === 1 ? 'from-purple-500 to-pink-500' :
                                       index % 4 === 2 ? 'from-green-500 to-emerald-500' :
                                       'from-yellow-500 to-orange-500'
                    
                    return (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${moduleColor} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm leading-tight">{module.title}</h4>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-blue-200">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="h-3 w-3" />
                            <span>{module.lessons} lessons</span>
                          </div>
                        </div>
                        
                        {/* Progress bar placeholder */}
                        <div className="mt-3 w-full bg-white/10 rounded-full h-1.5">
                          <div className={`bg-gradient-to-r ${moduleColor} h-1.5 rounded-full transition-all duration-500`} style={{width: '0%'}}></div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SyllabusViewer