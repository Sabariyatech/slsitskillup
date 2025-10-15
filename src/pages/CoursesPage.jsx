import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import { Clock, Users, Star, ArrowRight, Filter, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const CoursesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Web Development', 'Data Science', 'Mobile Development', 'Cybersecurity', 'Cloud Computing', 'Design']

  const courses = [
    {
      id: 1,
      title: "Python Fullstack Development",
      description: "Master fullstack development with Python, Django, React and PostgreSQL for modern web applications.",
      duration: "6 months",
      students: "2.5K+",
      rating: 4.9,
      price: "₹25,000",
      originalPrice: "₹35,000",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      tags: ["Python", "Django", "React", "PostgreSQL"],
      level: "Intermediate",
      category: "Web Development",
      instructor: "Arjun Patel",
      modules: 12,
      projects: 5,
      certificate: true,
      featured: true
    },
    {
      id: 2,
      title: "Java Fullstack Development",
      description: "Build enterprise-grade applications with Java Spring Boot, Angular and microservices architecture.",
      duration: "7 months",
      students: "1.8K+",
      rating: 4.8,
      price: "₹28,000",
      originalPrice: "₹38,000",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      tags: ["Java", "Spring Boot", "Angular", "Microservices"],
      level: "Advanced",
      category: "Web Development",
      instructor: "Dr. Priya Sharma",
      modules: 15,
      projects: 8,
      certificate: true,
      featured: true
    },
    {
      id: 3,
      title: "Data Science & AI",
      description: "Master data analysis, machine learning, and artificial intelligence with Python and advanced tools.",
      duration: "8 months",
      students: "950+",
      rating: 4.6,
      price: "₹30,000",
      originalPrice: "₹40,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      level: "Advanced",
      category: "Data Science",
      instructor: "Rajesh Kumar",
      modules: 16,
      projects: 6,
      certificate: true,
      featured: true
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      description: "Build modern web applications with MongoDB, Express.js, React and Node.js stack.",
      duration: "5 months",
      students: "1.2K+",
      rating: 4.7,
      price: "₹22,000",
      originalPrice: "₹30,000",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      level: "Intermediate",
      category: "Web Development",
      instructor: "Sneha Reddy",
      modules: 10,
      projects: 4,
      certificate: true,
      featured: false
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Create cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      duration: "5 months",
      students: "1.5K+",
      rating: 4.8,
      price: "₹24,000",
      originalPrice: "₹32,000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      tags: ["React Native", "Flutter", "Firebase", "API Integration"],
      level: "Intermediate",
      category: "Mobile Development",
      instructor: "Arjun Patel",
      modules: 11,
      projects: 5,
      certificate: true,
      featured: false
    },
    {
      id: 6,
      title: "DevOps & Cloud Computing",
      description: "Master cloud platforms, containerization, and CI/CD pipelines with AWS, Docker, and Kubernetes.",
      duration: "6 months",
      students: "2K+",
      rating: 4.9,
      price: "₹26,000",
      originalPrice: "₹34,000",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      level: "Advanced",
      category: "Cloud Computing",
      instructor: "Sneha Reddy",
      modules: 14,
      projects: 7,
      certificate: true,
      featured: false
    },
    {
      id: 7,
      title: "Cybersecurity Fundamentals",
      description: "Protect systems and networks from digital attacks and threats with comprehensive security training.",
      duration: "4 months",
      students: "950+",
      rating: 4.6,
      price: "₹20,000",
      originalPrice: "₹28,000",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      tags: ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing"],
      level: "Beginner",
      category: "Cybersecurity",
      instructor: "Rajesh Kumar",
      modules: 8,
      projects: 3,
      certificate: true,
      featured: false
    },
    {
      id: 8,
      title: "UI/UX Design Mastery",
      description: "Create beautiful and user-friendly digital experiences with modern design principles.",
      duration: "4 months",
      students: "2K+",
      rating: 4.9,
      price: "₹18,000",
      originalPrice: "₹25,000",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      level: "Beginner",
      category: "Design",
      instructor: "Sneha Reddy",
      modules: 9,
      projects: 7,
      certificate: true,
      featured: false
    },
    {
      id: 9,
      title: "Digital Marketing",
      description: "Master online marketing strategies including SEO, social media, and content marketing.",
      duration: "3 months",
      students: "1.8K+",
      rating: 4.5,
      price: "₹15,000",
      originalPrice: "₹22,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["SEO", "Social Media", "Google Ads", "Analytics"],
      level: "Beginner",
      category: "Design",
      instructor: "Arjun Patel",
      modules: 8,
      projects: 4,
      certificate: true,
      featured: false
    }
  ]

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
      const matchesSearch = !searchTerm || 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const featuredCourses = useMemo(() => courses.filter(course => course.featured), [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[50vh] sm:min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Courses
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
              Discover comprehensive programs designed to transform your career in technology
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Search */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-4 w-4 sm:h-5 sm:w-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 text-sm sm:text-base"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
                <Filter className="text-blue-300 h-4 w-4 sm:h-5 sm:w-5" />
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-white/10 text-blue-200 hover:bg-white/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Courses */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
              Featured <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Courses</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-effect rounded-xl sm:rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all duration-300">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                    <CourseCard course={course} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Courses */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.filter(course => !course.featured).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group"
              >
                <div className="glass-effect rounded-xl sm:rounded-2xl overflow-hidden h-full hover:bg-white/10 transition-all duration-300">
                  <CourseCard course={course} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const CourseCard = ({ course }) => (
  <>
    <div className="relative overflow-hidden h-40 sm:h-48">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
          course.level === 'Beginner' ? 'bg-green-500' :
          course.level === 'Intermediate' ? 'bg-yellow-500' : 'bg-red-500'
        } text-white`}>
          {course.level}
        </span>
        <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs">{course.rating}</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-xs sm:text-sm opacity-90">By {course.instructor}</p>
      </div>
    </div>

    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
        {course.title}
      </h3>
      
      <p className="text-blue-200 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
        {course.description}
      </p>

      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
        {course.tags.slice(0, 3).map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-blue-200 mb-4">
        <div className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span className="text-xs">{course.duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="h-3 w-3" />
          <span className="text-xs">{course.students}</span>
        </div>
        <div className="text-center">
          <span className="text-xs">{course.modules} Modules</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xl sm:text-2xl font-bold text-white">{course.price}</span>
          {course.originalPrice && (
            <span className="text-blue-300 text-xs sm:text-sm line-through ml-2">{course.originalPrice}</span>
          )}
        </div>
        <div className="text-green-400 text-xs sm:text-sm font-medium">
          {Math.round(((parseInt(course.originalPrice?.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice?.replace('₹', '').replace(',', ''))) * 100)}% OFF
        </div>
      </div>

      <Link
        to={`/course/${course.id}`}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm flex items-center justify-center space-x-2 hover:shadow-lg transition-all group-hover:from-blue-400 group-hover:to-purple-500"
      >
        <span>View Details</span>
        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
      </Link>
    </div>
  </>
)

export default CoursesPage