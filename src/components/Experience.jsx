import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Product Manager - ML Solutions',
      company: 'Amazon Web Services',
      location: 'Redmond, WA',
      period: 'Jul 2022 - Sept 2023',
      current: false,
      description: [
        'Led product strategy and roadmap for ML solutions serving enterprise clients across aerospace, defense, and banking sectors',
        'Drove 5% improvement in model RMSE through data-driven product decisions and cross-functional collaboration with ML engineering teams',
        'Defined and shipped MLOps platform features using SageMaker and AWS CDK, reducing deployment time by 40%',
        'Owned end-to-end product lifecycle for graph database infrastructure, from customer discovery to production launch',
        'Collaborated with 10+ enterprise clients to translate business requirements into technical product specifications',
        'Established product metrics and KPIs that aligned ML capabilities with customer success outcomes',
      ],
    },
    {
      title: 'Associate Product Manager - Technical',
      company: 'Amazon',
      location: 'Seattle, WA',
      period: 'July 2021 - July 2022',
      current: false,
      description: [
        'Drove product improvements that enhanced data processing efficiency by 30% through technical requirements gathering',
        'Led infrastructure modernization initiative, reducing operational costs by 25% through strategic technical decisions',
        'Partnered with engineering teams to define product requirements and prioritize feature development',
        'Conducted user research and competitive analysis to inform product roadmap decisions',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'University of Pennsylvania',
      location: 'Philadelphia, PA',
      period: 'Aug 2021 - Jan 2022',
      current: false,
      description: [
        'Checked assignments, proctored tests, and provided grades according to university standards',
        'Provided relevant and timely feedback on student assignments',
        'Mentored students through office hours and one-on-one communication',
        'Taught small groups of students focused on specific parts of coursework',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Product <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building ML products that deliver measurable business impact and customer value
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 to-blue-400"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2 text-primary-600">
                        <Briefcase size={20} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{exp.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary-600 mt-1.5">▸</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden md:block md:col-start-1'}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
