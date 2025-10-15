import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import CourseDetails from './pages/CourseDetails'
import ContactPage from './pages/ContactPage'
import CRTPage from './pages/CRTPage'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import ChatWidget from './components/ChatWidget'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <ParticleBackground />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/crt" element={<CRTPage />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App