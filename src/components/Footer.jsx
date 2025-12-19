import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-2"
            >
              <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
                Meghana Denduluri
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 flex items-center justify-center md:justify-start gap-2"
            >
              Built with <Heart size={16} className="text-red-500" fill="currentColor" /> using React & TailwindCSS
            </motion.p>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
