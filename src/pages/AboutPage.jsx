import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, Zap, Heart, Globe, Lightbulb, Trophy } from 'lucide-react'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "20+ years in education technology",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Sharma",
      role: "Head of Academics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in curriculum development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Arjun Patel",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack development specialist",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Sneha Reddy",
      role: "Student Success Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated to student achievement",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "We are committed to delivering the highest quality education and support to every student.",
      bg: "bg-gradient-to-br from-red-500/20 to-pink-500/20"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for opportunities in the global technology landscape.",
      bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Embracing cutting-edge technologies and teaching methodologies.",
      bg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Trophy,
      title: "Success Driven",
      description: "Measuring our success through the achievements of our students.",
      bg: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Transforming lives through technology education and empowering the next generation of innovators
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
                <div className="relative z-10">
                  <Target className="h-12 w-12 text-blue-400 mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    To bridge the gap between academic learning and industry requirements by providing 
                    practical, hands-on education that prepares students for successful careers in technology.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10" />
                <div className="relative z-10">
                  <Zap className="h-12 w-12 text-purple-400 mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    To become the leading institution for technology education, recognized globally for 
                    innovation, excellence, and the success of our graduates in shaping the digital future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 text-center group hover:bg-white/10 transition-all relative overflow-hidden"
              >
                <div className={`absolute inset-0 ${value.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4"
                  >
                    <value.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Passionate educators and industry experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative mb-6"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20 group-hover:border-white/40 transition-all"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-3">{member.role}</p>
                    <p className="text-blue-100 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students Trained", icon: Users },
              { number: "95%", label: "Placement Rate", icon: Trophy },
              { number: "50+", label: "Industry Partners", icon: Globe },
              { number: "15+", label: "Years Experience", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-8 text-center group hover:bg-white/10 transition-all"
              >
                <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:text-white transition-colors" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage