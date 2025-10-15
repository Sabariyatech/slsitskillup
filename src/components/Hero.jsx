import { motion } from 'framer-motion'
import { ArrowRight, Play, BookOpen, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Story Navigation */}
      <div className="story-nav hidden lg:block">
        {[1, 2, 3, 4, 5].map((dot, index) => (
          <div key={index} className={`story-nav-dot ${index === 0 ? 'active' : ''}`} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          {/* Chapter Introduction */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-12 mt-8"
          >
            <div className="glass-effect rounded-full px-8 py-4 flex items-center space-x-3">
              <div className="chapter-number w-10 h-10 text-base">1</div>
              <span className="text-slate-200 font-medium text-lg">Chapter One: The Beginning</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-8"
          >
            Every Great Career
            <span className="block text-gradient animate-story-text">Starts with a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            What if we told you that in just 6 months, you could transform from a curious learner 
            into a skilled professional? This is not just education—this is your transformation story.
          </motion.p>

          {/* Story Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
          >
            {[
              { icon: Users, number: "10,000+", label: "Success Stories", color: "text-blue-400" },
              { icon: BookOpen, number: "50+", label: "Learning Paths", color: "text-emerald-400" },
              { icon: Award, number: "95%", label: "Career Growth", color: "text-amber-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                className="text-center story-card glass-effect rounded-xl p-4"
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl md:text-3xl font-bold text-slate-100">{stat.number}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link to="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-professional flex items-center space-x-3"
              >
                <span>Begin Your Story</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
              className="btn-secondary flex items-center space-x-3"
            >
              <Play className="h-5 w-5" />
              <span>Watch Success Stories</span>
            </motion.button>
          </motion.div>

          {/* Story Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              "From Zero to Hero: A Real Transformation"
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Meet Priya, who went from a college graduate with no coding experience to landing 
              her dream job at a top tech company. Her journey started with a single click—just like yours will.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                alt="Success Story" 
                className="w-12 h-12 rounded-full border-2 border-blue-400"
              />
              <div className="text-left">
                <p className="text-slate-200 font-semibold">Priya Sharma</p>
                <p className="text-slate-400 text-sm">Software Engineer at Google</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Story Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/2 right-20 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"
      />
    </section>
  )
}

export default Hero