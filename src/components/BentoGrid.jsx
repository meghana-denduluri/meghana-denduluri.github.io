import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, Linkedin, Mail, MapPin, FileText, Briefcase, 
  BookOpen, Award, TrendingUp, Sparkles, ExternalLink,
  Code2, Database, Brain, Zap, Target, Users
} from 'lucide-react'

const BentoGrid = () => {
  const cards = [
    // Hero Card - Large
    {
      id: 'hero',
      type: 'hero',
      size: 'large',
      className: 'md:col-span-2 md:row-span-2',
      gradient: 'from-white to-beige-100',
      content: {
        title: 'Meghana Denduluri',
        subtitle: 'Product Manager & ML Strategist',
        description: 'Building AI products that drive measurable impact. Transforming ML capabilities into strategic solutions at AWS.',
        image: '/img/meghportrait.jpg'
      }
    },
    // Location Card
    {
      id: 'location',
      type: 'location',
      size: 'small',
      className: 'md:col-span-1',
      icon: MapPin,
      content: {
        title: 'Based in',
        value: 'Redmond, WA',
        link: 'https://www.google.com/maps/place/Redmond,+WA'
      }
    },
    // LinkedIn Card
    {
      id: 'linkedin',
      type: 'social',
      size: 'small',
      className: 'md:col-span-1',
      icon: Linkedin,
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'LinkedIn',
        value: 'denduluri-meghana',
        link: 'https://www.linkedin.com/in/denduluri-meghana/'
      }
    },
    // GitHub Card
    {
      id: 'github',
      type: 'social',
      size: 'small',
      className: 'md:col-span-1',
      icon: Github,
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'GitHub',
        value: 'meghana-denduluri',
        link: 'https://github.com/meghana-denduluri'
      }
    },
    // Email Card
    {
      id: 'email',
      type: 'social',
      size: 'small',
      className: 'md:col-span-1',
      icon: Mail,
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'Email',
        value: 'dmeghana18@gmail.com',
        link: 'mailto:dmeghana18@gmail.com'
      }
    },
    // Stats Card
    {
      id: 'stats',
      type: 'stats',
      size: 'medium',
      className: 'md:col-span-2',
      gradient: 'from-primary-300 to-primary-400',
      content: {
        stats: [
          { icon: Target, value: '3+', label: 'Years Experience' },
          { icon: Users, value: '10+', label: 'Products Shipped' },
          { icon: TrendingUp, value: '5%', label: 'Model Improvement' },
          { icon: Briefcase, value: '15+', label: 'Enterprise Clients' }
        ]
      }
    },
    // Case Study 1
    {
      id: 'case1',
      type: 'case-study',
      size: 'medium',
      className: 'md:col-span-1 md:row-span-2',
      image: '/img/finetuning.png',
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'ML Model Optimization',
        subtitle: 'RAG vs Fine-Tuning Framework',
        metric: '60%',
        metricLabel: 'Faster Decisions',
        link: 'https://meghcodes.notion.site/meghcodes/Retrieval-augmented-generation-v-s-fine-tuning-237b069a66e74c78b89386696e3e8e99'
      }
    },
    // Case Study 2
    {
      id: 'case2',
      type: 'case-study',
      size: 'medium',
      className: 'md:col-span-1 md:row-span-2',
      image: '/img/llmhal.png',
      gradient: 'from-beige-300 to-beige-400',
      content: {
        title: 'AI Trust & Safety',
        subtitle: 'Chain of Verification',
        metric: '40%',
        metricLabel: 'Less Hallucinations',
        link: 'https://meghcodes.notion.site/Mitigating-Hallucinations-in-LLMs-Chain-of-Verification-CoVe-7f53dffe58024656857b7cecd74fa443?pvs=4'
      }
    },
    // Case Study 3
    {
      id: 'case3',
      type: 'case-study',
      size: 'medium',
      className: 'md:col-span-1 md:row-span-2',
      image: '/img/hello.png',
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'ML Infrastructure',
        subtitle: 'Vector Database Platform',
        metric: '70%',
        metricLabel: 'Faster Queries',
        link: 'https://meghcodes.notion.site/Vector-Databases-6453b69dc6644d649fe4f79d5ac09099?pvs=4'
      }
    },
    // Skills Card
    {
      id: 'skills',
      type: 'skills',
      size: 'medium',
      className: 'md:col-span-2',
      content: {
        title: 'Core Expertise',
        skills: [
          { icon: Brain, name: 'Product Strategy', color: 'primary' },
          { icon: Users, name: 'User Research', color: 'accent' },
          { icon: Database, name: 'ML Systems', color: 'purple' },
          { icon: Zap, name: 'Agile Leadership', color: 'blue' },
          { icon: TrendingUp, name: 'Data Analytics', color: 'green' },
          { icon: Code2, name: 'Technical PM', color: 'indigo' }
        ]
      }
    },
    // Education Card
    {
      id: 'education',
      type: 'education',
      size: 'medium',
      className: 'md:col-span-1',
      icon: Award,
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'Education',
        items: [
          { degree: 'MSE Data Science', school: 'UPenn', year: '2021' },
          { degree: 'B.Tech EEE', school: 'GITAM', year: '2019' }
        ]
      }
    },
    // Resume Card
    {
      id: 'resume',
      type: 'link',
      size: 'small',
      className: 'md:col-span-1',
      icon: FileText,
      gradient: 'from-beige-300 to-beige-400',
      content: {
        title: 'Resume',
        value: 'View CV',
        link: '/files/cv.pdf'
      }
    },
    // Quote/Philosophy Card
    {
      id: 'philosophy',
      type: 'quote',
      size: 'large',
      className: 'md:col-span-2',
      gradient: 'from-primary-300 to-primary-400',
      content: {
        quote: 'The best products emerge from deep customer empathy, rigorous experimentation, and a relentless focus on outcomes over outputs.',
        author: 'My Product Philosophy'
      }
    }
  ]

  const getGradientStyle = (gradient) => {
    const gradientMap = {
      'from-white to-beige-100': 'linear-gradient(to bottom right, #ffffff, #f5f1e9)',
      'from-primary-300 to-primary-400': 'linear-gradient(to bottom right, #9adbb3, #adebb3)',
      'from-beige-300 to-beige-400': 'linear-gradient(to bottom right, #d9ccb7, #c9b79c)',
    }
    return gradientMap[gradient] || `linear-gradient(to bottom right, #ffffff, #f5f1e9)`
  }

  const renderCard = (card) => {
    const baseClasses = "group relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
    
    switch (card.type) {
      case 'hero':
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} text-gray-900 p-8 min-h-[400px] flex flex-col justify-between`}
            style={{ background: getGradientStyle(card.gradient) }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-primary-500" size={24} />
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">
                  {card.content.subtitle}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-900">
                {card.content.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
                {card.content.description}
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-primary-200 shadow-xl">
                <img 
                  src={card.content.image} 
                  alt={card.content.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary-300 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-primary-200 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </motion.div>
        )

      case 'social':
      case 'location':
      case 'link':
        const Icon = card.icon
        const hasGradient = card.gradient
        return (
          <motion.a
            key={card.id}
            href={card.content.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${baseClasses} ${card.className} p-6 min-h-[140px] flex flex-col justify-between ${
              !hasGradient ? 'bg-white border-2 border-gray-200 hover:border-primary-500' : ''
            }`}
            style={hasGradient ? { background: getGradientStyle(card.gradient), color: 'white' } : {}}
          >
            <Icon size={32} className={hasGradient ? 'text-white' : 'text-gray-700'} />
            <div>
              <p className={`text-sm font-medium mb-1 ${hasGradient ? 'opacity-80' : 'text-gray-500'}`}>
                {card.content.title}
              </p>
              <p className={`font-bold text-lg ${hasGradient ? 'text-white' : 'text-gray-900'}`}>
                {card.content.value}
              </p>
            </div>
            <ExternalLink 
              size={16} 
              className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                hasGradient ? 'text-white' : 'text-gray-700'
              }`} 
            />
          </motion.a>
        )

      case 'stats':
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${baseClasses} ${card.className} text-white p-6`}
            style={{ background: getGradientStyle(card.gradient) }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
              {card.content.stats.map((stat, idx) => {
                const StatIcon = stat.icon
                return (
                  <div key={idx} className="flex flex-col items-center justify-center text-center">
                    <StatIcon size={32} className="mb-2 opacity-90" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm opacity-80">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )

      case 'case-study':
        return (
          <motion.a
            key={card.id}
            href={card.content.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`${baseClasses} ${card.className} bg-white border-2 border-gray-200 hover:border-primary-500 min-h-[320px] overflow-hidden`}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={card.image} 
                alt={card.content.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 inline-block">
                  <div className="text-2xl font-bold text-gray-900">{card.content.metric}</div>
                  <div className="text-xs text-gray-600">{card.content.metricLabel}</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {card.content.title}
              </h3>
              <p className="text-sm text-gray-600">{card.content.subtitle}</p>
            </div>
            <ExternalLink 
              size={18} 
              className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" 
            />
          </motion.a>
        )

      case 'skills':
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`${baseClasses} ${card.className} bg-white border-2 border-gray-200 hover:border-primary-500 p-6`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{card.content.title}</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {card.content.skills.map((skill, idx) => {
                const SkillIcon = skill.icon
                return (
                  <div key={idx} className="flex flex-col items-center text-center group/skill">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${skill.color}-100 to-${skill.color}-50 flex items-center justify-center mb-2 group-hover/skill:scale-110 transition-transform`}>
                      <SkillIcon className={`text-${skill.color}-600`} size={24} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )

      case 'education':
        const EduIcon = card.icon
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`${baseClasses} ${card.className} text-white p-6 min-h-[200px]`}
            style={{ background: getGradientStyle(card.gradient) }}
          >
            <EduIcon size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-4">{card.content.title}</h3>
            <div className="space-y-3">
              {card.content.items.map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/30 pl-4">
                  <div className="font-bold">{item.degree}</div>
                  <div className="text-sm opacity-80">{item.school} • {item.year}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )

      case 'quote':
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`${baseClasses} ${card.className} text-gray-900 p-8 min-h-[200px] flex flex-col justify-center`}
            style={{ background: getGradientStyle(card.gradient) }}
          >
            <div className="text-4xl mb-4 text-primary-300">"</div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4 text-gray-900">
              {card.content.quote}
            </p>
            <p className="text-sm text-gray-700 font-semibold">— {card.content.author}</p>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <section className="min-h-screen py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Product Manager Portfolio
          </h2>
          <p className="text-gray-600 text-lg">
            Transforming AI innovation into business value
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
          {cards.map(card => renderCard(card))}
        </div>
      </div>
    </section>
  )
}

export default BentoGrid