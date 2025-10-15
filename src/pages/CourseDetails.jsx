import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Clock, Users, Star, Play, Eye, CheckCircle, Award, BookOpen, ArrowLeft } from 'lucide-react'
import SyllabusViewer from '../components/SyllabusViewer'
import CertificateModal from '../components/CertificateModal'
import EnrollmentModal from '../components/EnrollmentModal'

const CourseDetails = () => {
  const { id } = useParams()
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false)
  const [isCertificateOpen, setIsCertificateOpen] = useState(false)
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)
  
  const courseData = {
    1: {
      title: "Python Fullstack Development",
      description: "Master fullstack development with Python, Django, React and PostgreSQL for modern web applications.",
      duration: "6 months",
      students: "2.5K+",
      rating: 4.9,
      price: "₹25,000",
      originalPrice: "₹35,000",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop",
      instructor: "Arjun Patel",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      level: "Intermediate",
      modules: 12,
      projects: 5,
      certificate: true,
      curriculum: [
        { title: "Python Programming Fundamentals", duration: "2 weeks", lessons: 8 },
        { title: "Django Framework Basics", duration: "3 weeks", lessons: 12 },
        { title: "React.js Frontend Development", duration: "4 weeks", lessons: 16 },
        { title: "PostgreSQL Database Design", duration: "2 weeks", lessons: 10 },
        { title: "API Development & Integration", duration: "3 weeks", lessons: 12 },
        { title: "Authentication & Security", duration: "2 weeks", lessons: 8 },
        { title: "Deployment & DevOps", duration: "2 weeks", lessons: 6 },
        { title: "Testing & Quality Assurance", duration: "2 weeks", lessons: 8 },
        { title: "Performance Optimization", duration: "1 week", lessons: 4 },
        { title: "Real-world Projects", duration: "4 weeks", lessons: 20 },
        { title: "Portfolio Development", duration: "2 weeks", lessons: 6 },
        { title: "Job Interview Preparation", duration: "1 week", lessons: 4 }
      ],
      skills: ["Python", "Django", "React", "PostgreSQL", "REST APIs", "Authentication", "Deployment", "Testing", "Git", "Full Stack Development"],
      requirements: ["Basic programming knowledge", "Computer with internet", "Dedication to learn"],
      features: ["Live coding sessions", "1-on-1 mentorship", "Industry projects", "Job placement assistance", "Lifetime access"]
    },
    2: {
      title: "Java Fullstack Development",
      description: "Build enterprise-grade applications with Java Spring Boot, Angular and microservices architecture.",
      duration: "7 months",
      students: "1.8K+",
      rating: 4.8,
      price: "₹28,000",
      originalPrice: "₹38,000",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
      instructor: "Dr. Priya Sharma",
      instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      level: "Advanced",
      modules: 15,
      projects: 8,
      certificate: true,
      curriculum: [
        { title: "Java Programming Advanced", duration: "3 weeks", lessons: 12 },
        { title: "Spring Boot Framework", duration: "4 weeks", lessons: 16 },
        { title: "Angular Frontend Development", duration: "4 weeks", lessons: 18 },
        { title: "Microservices Architecture", duration: "3 weeks", lessons: 14 },
        { title: "Database Design & JPA", duration: "2 weeks", lessons: 10 },
        { title: "RESTful Web Services", duration: "2 weeks", lessons: 8 },
        { title: "Security & Authentication", duration: "2 weeks", lessons: 8 },
        { title: "Testing & Quality Assurance", duration: "2 weeks", lessons: 10 },
        { title: "Docker & Containerization", duration: "2 weeks", lessons: 8 },
        { title: "Cloud Deployment", duration: "2 weeks", lessons: 6 },
        { title: "Performance Optimization", duration: "1 week", lessons: 4 },
        { title: "Enterprise Projects", duration: "5 weeks", lessons: 24 },
        { title: "System Design", duration: "2 weeks", lessons: 8 },
        { title: "DevOps Integration", duration: "2 weeks", lessons: 8 },
        { title: "Career Preparation", duration: "1 week", lessons: 4 }
      ],
      skills: ["Java", "Spring Boot", "Angular", "Microservices", "JPA", "REST APIs", "Docker", "Cloud Deployment", "System Design", "Enterprise Development"],
      requirements: ["Java fundamentals", "Object-oriented programming", "Database basics"],
      features: ["Enterprise projects", "Industry mentorship", "Certification prep", "System design training", "Job placement support"]
    },
    3: {
      title: "Data Science & AI",
      description: "Master data analysis, machine learning, and artificial intelligence with Python and advanced tools.",
      duration: "8 months",
      students: "950+",
      rating: 4.6,
      price: "₹30,000",
      originalPrice: "₹40,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      instructor: "Rajesh Kumar",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      level: "Advanced",
      modules: 16,
      projects: 6,
      certificate: true,
      curriculum: [
        { title: "Python for Data Science", duration: "3 weeks", lessons: 12 },
        { title: "Statistics & Probability", duration: "2 weeks", lessons: 10 },
        { title: "Data Manipulation with Pandas", duration: "3 weeks", lessons: 14 },
        { title: "Data Visualization", duration: "2 weeks", lessons: 8 },
        { title: "Machine Learning Algorithms", duration: "4 weeks", lessons: 18 },
        { title: "Deep Learning & Neural Networks", duration: "4 weeks", lessons: 16 },
        { title: "Natural Language Processing", duration: "3 weeks", lessons: 12 },
        { title: "Computer Vision", duration: "3 weeks", lessons: 12 },
        { title: "Model Deployment", duration: "2 weeks", lessons: 8 },
        { title: "Big Data Analytics", duration: "3 weeks", lessons: 14 },
        { title: "AI Ethics & Bias", duration: "1 week", lessons: 4 },
        { title: "TensorFlow & PyTorch", duration: "3 weeks", lessons: 12 },
        { title: "MLOps & Production", duration: "2 weeks", lessons: 8 },
        { title: "Research Projects", duration: "4 weeks", lessons: 16 },
        { title: "Industry Case Studies", duration: "2 weeks", lessons: 8 },
        { title: "Capstone Projects", duration: "6 weeks", lessons: 24 }
      ],
      skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "SQL", "Machine Learning", "Deep Learning", "Data Visualization"],
      requirements: ["Basic mathematics", "Programming fundamentals", "Statistical thinking"],
      features: ["Real datasets", "Industry mentorship", "Kaggle competitions", "Portfolio projects", "Job placement support"]
    },
    4: {
      title: "Full Stack Web Development",
      description: "Build modern web applications with MongoDB, Express.js, React and Node.js stack.",
      duration: "5 months",
      students: "1.2K+",
      rating: 4.7,
      price: "₹22,000",
      originalPrice: "₹30,000",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      instructor: "Sneha Reddy",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      level: "Intermediate",
      modules: 10,
      projects: 4,
      certificate: true,
      curriculum: [
        { title: "MERN Stack Fundamentals", duration: "2 weeks", lessons: 8 },
        { title: "MongoDB Database Design", duration: "2 weeks", lessons: 10 },
        { title: "Express.js Backend", duration: "3 weeks", lessons: 12 },
        { title: "React Frontend Development", duration: "4 weeks", lessons: 16 },
        { title: "Node.js Server Development", duration: "3 weeks", lessons: 12 },
        { title: "API Development", duration: "2 weeks", lessons: 8 },
        { title: "Authentication & Security", duration: "2 weeks", lessons: 8 },
        { title: "Deployment & Hosting", duration: "1 week", lessons: 4 },
        { title: "Testing & Debugging", duration: "2 weeks", lessons: 8 },
        { title: "Full Stack Projects", duration: "3 weeks", lessons: 12 }
      ],
      skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "REST APIs", "Authentication", "Database Design", "Full Stack Development", "Deployment"],
      requirements: ["JavaScript fundamentals", "Basic web development", "Problem-solving skills"],
      features: ["Full stack projects", "Industry mentorship", "Job placement assistance", "Portfolio development", "Live coding sessions"]
    },
    5: {
      title: "Mobile App Development",
      description: "Create cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      duration: "5 months",
      students: "1.5K+",
      rating: 4.8,
      price: "₹24,000",
      originalPrice: "₹32,000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      instructor: "Arjun Patel",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      level: "Intermediate",
      modules: 11,
      projects: 5,
      certificate: true,
      curriculum: [
        { title: "Mobile Development Fundamentals", duration: "2 weeks", lessons: 8 },
        { title: "React Native Basics", duration: "3 weeks", lessons: 12 },
        { title: "Flutter Development", duration: "3 weeks", lessons: 12 },
        { title: "UI/UX for Mobile", duration: "2 weeks", lessons: 10 },
        { title: "State Management", duration: "2 weeks", lessons: 8 },
        { title: "API Integration", duration: "2 weeks", lessons: 8 },
        { title: "Firebase & Backend", duration: "2 weeks", lessons: 10 },
        { title: "Testing & Debugging", duration: "2 weeks", lessons: 8 },
        { title: "App Store Deployment", duration: "1 week", lessons: 4 },
        { title: "Performance Optimization", duration: "1 week", lessons: 4 },
        { title: "Portfolio Apps", duration: "3 weeks", lessons: 12 }
      ],
      skills: ["React Native", "Flutter", "Firebase", "API Integration", "Mobile UI/UX", "State Management", "App Store Deployment", "Cross-platform Development", "Performance Optimization", "Testing"],
      requirements: ["Basic programming", "JavaScript understanding", "Mobile device for testing"],
      features: ["Real app development", "App store publishing", "Cross-platform focus", "Industry mentorship", "Portfolio building"]
    },
    6: {
      title: "DevOps & Cloud Computing",
      description: "Master cloud platforms, containerization, and CI/CD pipelines with AWS, Docker, and Kubernetes.",
      duration: "6 months",
      students: "2K+",
      rating: 4.9,
      price: "₹26,000",
      originalPrice: "₹34,000",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      instructor: "Sneha Reddy",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      level: "Advanced",
      modules: 14,
      projects: 7,
      certificate: true,
      curriculum: [
        { title: "Cloud Computing Basics", duration: "2 weeks", lessons: 8 },
        { title: "AWS Fundamentals", duration: "3 weeks", lessons: 14 },
        { title: "Docker Containerization", duration: "2 weeks", lessons: 10 },
        { title: "Kubernetes Orchestration", duration: "3 weeks", lessons: 12 },
        { title: "CI/CD Pipelines", duration: "3 weeks", lessons: 12 },
        { title: "Infrastructure as Code", duration: "2 weeks", lessons: 8 },
        { title: "Monitoring & Logging", duration: "2 weeks", lessons: 8 },
        { title: "Security in DevOps", duration: "2 weeks", lessons: 8 },
        { title: "Microservices Architecture", duration: "2 weeks", lessons: 10 },
        { title: "Cloud Migration", duration: "2 weeks", lessons: 8 },
        { title: "Cost Optimization", duration: "1 week", lessons: 4 },
        { title: "Automation Tools", duration: "2 weeks", lessons: 8 },
        { title: "Performance Monitoring", duration: "1 week", lessons: 4 },
        { title: "Capstone Project", duration: "4 weeks", lessons: 16 }
      ],
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring", "DevOps Tools", "Cloud Architecture", "Automation", "Security"],
      requirements: ["Linux basics", "Networking fundamentals", "Programming experience"],
      features: ["AWS certification prep", "Hands-on labs", "Real-world projects", "Industry mentorship", "Job placement support"]
    },
    7: {
      title: "Cybersecurity Fundamentals",
      description: "Protect systems and networks from digital attacks and threats with comprehensive security training.",
      duration: "4 months",
      students: "950+",
      rating: 4.6,
      price: "₹20,000",
      originalPrice: "₹28,000",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      instructor: "Rajesh Kumar",
      instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      level: "Beginner",
      modules: 8,
      projects: 3,
      certificate: true,
      curriculum: [
        { title: "Cybersecurity Fundamentals", duration: "2 weeks", lessons: 8 },
        { title: "Network Security", duration: "3 weeks", lessons: 12 },
        { title: "Ethical Hacking Basics", duration: "3 weeks", lessons: 14 },
        { title: "Cryptography", duration: "2 weeks", lessons: 8 },
        { title: "Penetration Testing", duration: "3 weeks", lessons: 12 },
        { title: "Incident Response", duration: "2 weeks", lessons: 8 },
        { title: "Security Tools", duration: "2 weeks", lessons: 10 },
        { title: "Compliance & Governance", duration: "1 week", lessons: 4 }
      ],
      skills: ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing", "Security Tools", "Incident Response", "Risk Assessment", "Compliance"],
      requirements: ["Basic networking", "Computer fundamentals", "Analytical thinking"],
      features: ["Hands-on labs", "Security tools training", "Certification prep", "Industry scenarios", "Career guidance"]
    },
    8: {
      title: "UI/UX Design Mastery",
      description: "Create beautiful and user-friendly digital experiences with modern design principles.",
      duration: "4 months",
      students: "2K+",
      rating: 4.9,
      price: "₹18,000",
      originalPrice: "₹25,000",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
      instructor: "Sneha Reddy",
      instructorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      level: "Beginner",
      modules: 9,
      projects: 7,
      certificate: true,
      curriculum: [
        { title: "Design Thinking Fundamentals", duration: "2 weeks", lessons: 8 },
        { title: "User Research Methods", duration: "2 weeks", lessons: 10 },
        { title: "Wireframing & Prototyping", duration: "3 weeks", lessons: 12 },
        { title: "Visual Design Principles", duration: "2 weeks", lessons: 8 },
        { title: "Figma Mastery", duration: "2 weeks", lessons: 10 },
        { title: "Adobe XD & Tools", duration: "2 weeks", lessons: 8 },
        { title: "Interaction Design", duration: "2 weeks", lessons: 8 },
        { title: "Usability Testing", duration: "2 weeks", lessons: 8 },
        { title: "Portfolio Development", duration: "3 weeks", lessons: 12 }
      ],
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing", "Visual Design", "Interaction Design", "Usability Testing", "Design Systems", "Portfolio Building"],
      requirements: ["Creative mindset", "Basic computer skills", "Design interest"],
      features: ["Portfolio building", "Industry projects", "Design critique sessions", "Mentorship", "Job placement support"]
    },
    9: {
      title: "Digital Marketing",
      description: "Master online marketing strategies including SEO, social media, and content marketing.",
      duration: "3 months",
      students: "1.8K+",
      rating: 4.5,
      price: "₹15,000",
      originalPrice: "₹22,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      instructor: "Arjun Patel",
      instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      level: "Beginner",
      modules: 8,
      projects: 4,
      certificate: true,
      curriculum: [
        { title: "Digital Marketing Fundamentals", duration: "2 weeks", lessons: 8 },
        { title: "SEO & Content Strategy", duration: "3 weeks", lessons: 12 },
        { title: "Social Media Marketing", duration: "2 weeks", lessons: 10 },
        { title: "Google Ads & PPC", duration: "2 weeks", lessons: 8 },
        { title: "Email Marketing", duration: "1 week", lessons: 6 },
        { title: "Analytics & Reporting", duration: "2 weeks", lessons: 8 },
        { title: "Content Creation", duration: "2 weeks", lessons: 10 },
        { title: "Campaign Management", duration: "2 weeks", lessons: 8 }
      ],
      skills: ["SEO", "Social Media Marketing", "Google Ads", "Analytics", "Content Marketing", "Email Marketing", "PPC", "Campaign Management", "Digital Strategy", "ROI Analysis"],
      requirements: ["Basic computer skills", "Interest in marketing", "Creative thinking"],
      features: ["Real campaign projects", "Industry tools access", "Certification preparation", "Portfolio development", "Job placement assistance"]
    }
  }

  const course = courseData[id] || courseData[1]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <Link to="/courses" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-white mb-6">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">{course.description}</p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{course.rating}</span>
                  <span className="text-blue-200">({course.students} students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-white">{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div>
                  <p className="text-white font-semibold">{course.instructor}</p>
                  <p className="text-blue-200 text-sm">Senior Instructor</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-white">{course.price}</span>
                <span className="text-2xl text-blue-300 line-through">{course.originalPrice}</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {Math.round(((parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 sticky top-24">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Duration:</span>
                    <span className="text-white font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Modules:</span>
                    <span className="text-white font-semibold">{course.modules}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Projects:</span>
                    <span className="text-white font-semibold">{course.projects}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Certificate:</span>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                </div>

                <motion.button
                  onClick={() => setIsEnrollmentOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg mb-4 hover:shadow-xl transition-all"
                >
                  Enroll Now - {course.price}
                </motion.button>

                <button className="w-full glass-effect text-white py-3 rounded-xl font-medium hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                  <Play className="h-4 w-4" />
                  <span>Preview Course</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{module.title}</h3>
                            <p className="text-blue-200 text-sm">{module.lessons} lessons • {module.duration}</p>
                          </div>
                        </div>
                        <Play className="h-5 w-5 text-blue-400" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Requirements</h2>
                <div className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-blue-100">{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Course Features */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Course Features</h3>
                <div className="space-y-3">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certificate */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Get Certified</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Earn an industry-recognized certificate upon completion
                </p>
                <button 
                  onClick={() => setIsCertificateOpen(true)}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  View Sample Certificate
                </button>
              </motion.div>

              {/* View Syllabus */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <Eye className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Course Syllabus</h3>
                <p className="text-blue-100 text-sm mb-4">
                  View detailed curriculum and learning roadmap
                </p>
                <button 
                  onClick={() => setIsSyllabusOpen(true)}
                  className="w-full glass-effect text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-all"
                >
                  View Syllabus
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Viewer Modal */}
      <SyllabusViewer 
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        course={course}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        courseId={parseInt(id)}
        course={course}
      />

      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
        course={course}
      />
    </div>
  )
}

export default CourseDetails