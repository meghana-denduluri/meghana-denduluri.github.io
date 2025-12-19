import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Database, Zap, Shield, TrendingUp, Users, Target, CheckCircle } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'ML Model Optimization Strategy',
      subtitle: 'RAG vs Fine-Tuning Product Decision Framework',
      challenge: 'Enterprise clients needed guidance on choosing between RAG and fine-tuning for their LLM applications',
      solution: 'Developed a strategic framework analyzing cost, performance, and maintenance trade-offs for different use cases',
      impact: [
        'Reduced client decision time by 60%',
        'Improved model selection accuracy',
        'Created reusable decision matrix'
      ],
      metrics: { primary: '60%', secondary: 'Faster Decisions', tertiary: '15+ Clients' },
      image: '/img/finetuning.png',
      link: 'https://meghcodes.notion.site/meghcodes/Retrieval-augmented-generation-v-s-fine-tuning-237b069a66e74c78b89386696e3e8e99',
      tags: ['Product Strategy', 'LLM', 'Decision Framework'],
      icon: Target,
      color: 'primary',
    },
    {
      title: 'AI Trust & Safety Product',
      subtitle: 'Chain of Verification for Enterprise LLMs',
      challenge: 'LLM hallucinations were blocking enterprise adoption due to trust and accuracy concerns',
      solution: 'Led product development of verification pipeline that validates LLM outputs before user delivery',
      impact: [
        'Reduced hallucination rate by 40%',
        'Increased enterprise adoption by 3x',
        'Established new product category'
      ],
      metrics: { primary: '40%', secondary: 'Less Hallucinations', tertiary: '3x Adoption' },
      image: '/img/llmhal.png',
      link: 'https://meghcodes.notion.site/Mitigating-Hallucinations-in-LLMs-Chain-of-Verification-CoVe-7f53dffe58024656857b7cecd74fa443?pvs=4',
      tags: ['AI Safety', 'Product Launch', 'Enterprise'],
      icon: Shield,
      color: 'accent',
    },
    {
      title: 'ML Infrastructure Platform',
      subtitle: 'Vector Database Product Roadmap',
      challenge: 'Organizations struggled to scale AI applications without proper vector search infrastructure',
      solution: 'Defined product vision and go-to-market strategy for vector database platform targeting AI-first companies',
      impact: [
        'Enabled 10+ production deployments',
        'Reduced query latency by 70%',
        'Captured emerging market segment'
      ],
      metrics: { primary: '70%', secondary: 'Faster Queries', tertiary: '10+ Deployments' },
      image: '/img/hello.png',
      link: 'https://meghcodes.notion.site/Vector-Databases-6453b69dc6644d649fe4f79d5ac09099?pvs=4',
      tags: ['Infrastructure', 'GTM Strategy', 'Platform'],
      icon: Database,
      color: 'purple',
    },
  ]

  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter))

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Product <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Strategic product initiatives that transformed AI capabilities into business value
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === tag
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="glass-effect rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border-2 border-transparent hover:border-primary-200"
                >
                  {/* Image with Overlay */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Metrics Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                          <div className="text-2xl font-bold text-gray-900">{project.metrics.primary}</div>
                          <div className="text-xs text-gray-600">{project.metrics.secondary}</div>
                        </div>
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                          <div className="text-lg font-bold text-gray-900">{project.metrics.tertiary}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br from-${project.color}-500 to-${project.color}-600 rounded-2xl flex items-center justify-center shadow-xl`}>
                      <project.icon className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">{project.subtitle}</p>
                    </div>

                    {/* Challenge/Solution */}
                    <div className="space-y-4 mb-6 flex-1">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Challenge</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Solution</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={16} className="text-primary-600" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Impact</span>
                      </div>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-accent-50 text-primary-700 text-xs rounded-lg font-semibold border border-primary-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read Case Study
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Projects Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new projects and exploring innovative ML solutions. 
              Check back soon for more updates!
            </p>
            <motion.a
              href="https://github.com/meghana-denduluri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View GitHub Profile
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
