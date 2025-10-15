import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, Zap, BookOpen, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const storyChapters = [
    {
      chapter: "2",
      title: "The Challenge",
      subtitle: "Where Dreams Meet Reality",
      content: "In today's rapidly evolving tech landscape, traditional education often leaves a gap between what students learn and what industry demands. We saw brilliant minds struggling to bridge this divide.",
      icon: Target,
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      chapter: "3", 
      title: "The Vision",
      subtitle: "A New Way Forward",
      content: "We envisioned a place where learning isn't just about theory—it's about transformation. Where every student's journey is crafted with precision, passion, and purpose.",
      icon: Zap,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10"
    },
    {
      chapter: "4",
      title: "The Mission",
      subtitle: "Crafting Success Stories",
      content: "Our mission became clear: to create not just skilled professionals, but confident innovators who can shape the future of technology. Every course, every project, every moment is designed for your success.",
      icon: Award,
      color: "text-emerald-400", 
      bgColor: "bg-emerald-500/10"
    }
  ]

  const milestones = [
    { year: "2024", event: "The Beginning", description: "Founded with a vision to transform tech education in Guntur", students: "100+" },
    { year: "2024", event: "First Batch Success", description: "Launched comprehensive skill development programs", students: "500+" },
    { year: "2024", event: "Industry Partnerships", description: "Established connections with leading tech companies", students: "1,000+" },
    { year: "2024", event: "Growing Impact", description: "Expanding programs and student success stories", students: "2,000+" }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-story opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Story Introduction */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <div className="glass-effect rounded-full px-8 py-3 flex items-center space-x-3">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <span className="text-slate-200 font-medium">Our Story Unfolds</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-8">
            Every Institution Has a <span className="story-gradient">Story</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Ours began with a simple question: "What if education could be more than just learning? 
            What if it could be a complete transformation?" Here's how we turned that question into reality.
          </p>
        </motion.div>

        {/* Story Chapters */}
        <div className="space-y-20 mb-20">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Chapter Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="chapter-number">{chapter.chapter}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-100">{chapter.title}</h3>
                    <p className="text-blue-400 font-medium">{chapter.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">{chapter.content}</p>
              </div>

              {/* Chapter Visual */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className={`story-card glass-effect rounded-2xl p-8 ${chapter.bgColor} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  <div className="relative z-10 text-center">
                    <chapter.icon className={`h-20 w-20 ${chapter.color} mx-auto mb-6`} />
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="glass-effect rounded-lg p-4">
                          <div className="text-2xl font-bold text-slate-100">500+</div>
                          <div className="text-slate-400 text-sm">Success Stories</div>
                        </div>
                        <div className="glass-effect rounded-lg p-4">
                          <div className="text-2xl font-bold text-slate-100">95%</div>
                          <div className="text-slate-400 text-sm">Placement Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline - Our Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-100 mb-4">
              The Journey <span className="professional-gradient">Continues</span>
            </h3>
            <p className="text-xl text-slate-300">Milestones that shaped our story</p>
          </div>

          <div className="relative">
            <div className="timeline-line h-full" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="story-card glass-effect rounded-xl p-6 professional-hover">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </div>
                        <TrendingUp className="h-5 w-5 text-emerald-400" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-100 mb-2">{milestone.event}</h4>
                      <p className="text-slate-300 mb-3">{milestone.description}</p>
                      <div className="text-blue-400 font-semibold">{milestone.students} Students Impacted</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Story Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center glass-effect rounded-2xl p-12 bg-gradient-to-br from-blue-500/10 to-emerald-500/10"
        >
          <h3 className="text-3xl font-bold text-slate-100 mb-6">
            Your Chapter <span className="story-gradient">Begins Now</span>
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Every great story needs a hero. Every transformation needs a beginning. 
            Your journey from curious learner to skilled professional starts with a single decision.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-professional"
            >
              Start Your Transformation Story
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About