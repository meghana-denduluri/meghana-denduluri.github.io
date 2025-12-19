import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Users, BarChart3, Rocket, Target, Zap, MessageSquare, Database } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: 'Product Strategy',
      description: 'Defining product vision and roadmaps that align ML capabilities with business objectives and user needs.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Translating complex AI features into intuitive experiences through user research and iterative testing.',
      color: 'accent',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Leveraging analytics and ML insights to drive product decisions and measure impact with key metrics.',
      color: 'purple',
    },
    {
      icon: Rocket,
      title: 'Technical Leadership',
      description: 'Bridging engineering and business teams to ship ML-powered products from concept to production.',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'Go-to-Market',
      description: 'Crafting launch strategies and positioning for AI products that resonate with target audiences.',
      color: 'green',
    },
    {
      icon: Zap,
      title: 'Agile Execution',
      description: 'Leading cross-functional teams with agile methodologies to deliver value iteratively and efficiently.',
      color: 'yellow',
    },
    {
      icon: MessageSquare,
      title: 'Stakeholder Management',
      description: 'Communicating complex technical concepts to diverse audiences and aligning stakeholder expectations.',
      color: 'pink',
    },
    {
      icon: Database,
      title: 'ML Product Development',
      description: 'End-to-end ownership of ML products including data strategy, model deployment, and performance monitoring.',
      color: 'indigo',
    },
  ]

  const education = [
    {
      degree: 'MSE in Data Science',
      school: 'University of Pennsylvania',
      year: '2021',
      location: 'Philadelphia, PA',
    },
    {
      degree: 'B.Tech in Electrical and Electronics Engineering',
      school: 'GITAM University',
      year: '2019',
      location: 'Hyderabad, India',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Product Leader with <span className="text-gradient">ML Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming AI innovation into products that solve real problems and drive business growth
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-l-4 border-primary-500">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">My Product Philosophy</h3>
                <p className="text-gray-600">Building AI products that create measurable value</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a <strong>Product Manager with deep ML expertise</strong> at Amazon Web Services, where I transform 
              cutting-edge AI capabilities into products that solve real customer problems. My unique background in both 
              software engineering and machine learning allows me to bridge the gap between what's technically possible 
              and what's strategically valuable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My approach centers on <strong>user-centric product development</strong> backed by data-driven insights. 
              I've led cross-functional teams to ship ML-powered features that improved model performance by 5%, 
              streamlined deployment pipelines, and delivered measurable business impact across aerospace, defense, 
              and banking sectors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What sets me apart is my ability to <strong>translate complex AI concepts into compelling product narratives</strong> 
              that resonate with both technical teams and business stakeholders. I believe the best products emerge from 
              deep customer empathy, rigorous experimentation, and a relentless focus on outcomes over outputs.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Product Management Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 card-hover border-l-4 border-transparent hover:border-primary-500"
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-${skill.color}-100 to-${skill.color}-50 rounded-2xl flex items-center justify-center mb-4 shadow-md`}>
                  <skill.icon className={`text-${skill.color}-600`} size={26} />
                </div>
                <h4 className="text-xl font-semibold mb-3">{skill.title}</h4>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {edu.year}
                  </div>
                  <span className="text-sm text-gray-500">{edu.location}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                <p className="text-primary-600 font-medium">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
