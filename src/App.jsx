// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import Navigation from './components/Navigation'
// import Hero from './components/Hero'
// import About from './components/About'
// import Experience from './components/Experience'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// function App() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
//       <Navigation scrolled={scrolled} />
//       <main>
//         <Hero />
//         <About />
//         <Experience />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default App
import React from 'react'
import BentoLayout from './components/BentoLayout'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <BentoLayout />
    </div>
  )
}

export default App
