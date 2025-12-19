import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dmeghana18@gmail.com',
      link: 'mailto:dmeghana18@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Redmond, WA',
      link: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'denduluri-meghana',
      link: 'https://www.linkedin.com/in/denduluri-meghana/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'meghana-denduluri',
      link: 'https://github.com/meghana-denduluri',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Open to product leadership opportunities, consulting engagements, and strategic partnerships in AI/ML
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      {info.link ? (
                        <motion.a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/denduluri-meghana/', label: 'LinkedIn' },
                    { icon: Github, href: 'https://github.com/meghana-denduluri', label: 'GitHub' },
                    { icon: Mail, href: 'mailto:dmeghana18@gmail.com', label: 'Email' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-6 bg-gradient-to-br from-primary-50 to-blue-50"
            >
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-primary-600">💼 Product Leadership</strong>
                <br />
                Seeking opportunities to lead AI/ML product strategy, drive cross-functional teams, 
                and deliver products that solve complex problems at scale.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary-600 to-blue-600 text-white"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Build the Future Together</h3>
              <p className="text-white/90 leading-relaxed">
                Looking for a product leader who can translate AI innovation into business value? 
                Let's discuss how we can create products that make a real impact.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:dmeghana18@gmail.com"
                className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-white text-primary-600 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={20} />
                Send me an email
              </motion.a>

              <motion.a
                href="/files/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Download Resume
              </motion.a>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 text-center">
                Response time: Usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
