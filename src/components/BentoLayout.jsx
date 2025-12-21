import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, FileText, Award, ExternalLink, GraduationCap } from 'lucide-react'

const BentoLayout = () => {
  const getGradientStyle = (gradient) => {
    const gradientMap = {
      'from-white to-beige-100': 'linear-gradient(to bottom right, #ffffff, #f5f1e9)',
      'from-primary-300 to-primary-400': 'linear-gradient(to bottom right, #9adbb3, #adebb3)',
      'from-beige-300 to-beige-400': 'linear-gradient(to bottom right, #d9ccb7, #c9b79c)',
    }
    return gradientMap[gradient] || `linear-gradient(to bottom right, #ffffff, #f5f1e9)`
  }

  const rightCards = [
    // Currently Building Tile - Small utility
    {
      id: 'currently-building',
      type: 'building',
      className: 'md:col-span-1 md:row-span-1',
      content: {
        text: 'I am currently building',
        link: '#fincopilot'
      }
    },
    // FincopilotX Tile - PRIMARY ANCHOR (largest)
    {
      id: 'fincopilot',
      type: 'project',
      className: 'md:col-span-2 md:row-span-3',
      content: {
        title: 'FinCopilotX — Your AI Finance Command Center',
        description: 'A Gen-AI powered finance co-pilot that helps businesses forecast, optimize cash flow, and make smarter financial decisions—directly from their ERP data.',
        link: 'https://www.fincopilotx.ai/'
      }
    },
    // Location Card - Tertiary utility
    {
      id: 'location',
      type: 'location',
      className: 'md:col-span-1 md:row-span-1',
      icon: MapPin,
      content: {
        title: 'Based in',
        value: 'Hyderabad, India',
        link: 'https://www.google.com/maps/place/Hyderabad,+India'
      }
    },
    // LinkedIn Card - Secondary wide
    {
      id: 'linkedin',
      type: 'social',
      className: 'md:col-span-2 md:row-span-1',
      icon: Linkedin,
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'LinkedIn',
        value: 'denduluri-meghana',
        link: 'https://www.linkedin.com/in/denduluri-meghana/'
      }
    },
    // GitHub Card - Tertiary compact
    {
      id: 'github',
      type: 'social',
      className: 'md:col-span-1 md:row-span-1',
      icon: Github,
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'GitHub',
        value: 'meghana-denduluri',
        link: 'https://github.com/meghana-denduluri'
      }
    },
    // Email Card - Tertiary compact
    {
      id: 'email',
      type: 'social',
      className: 'md:col-span-1 md:row-span-1',
      icon: Mail,
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'Email',
        value: 'dmeghana18@gmail.com',
        link: 'mailto:dmeghana18@gmail.com'
      }
    },
    // Education Card - Secondary wide
    {
      id: 'education',
      type: 'education',
      className: 'md:col-span-2 md:row-span-1',
      icon: GraduationCap,
      gradient: 'from-beige-300 to-beige-400',
      content: {
        degree: "Master's in Computer Science",
        university: 'University of Pennsylvania',
        gpa: '3.61'
      }
    },
    // Case Study 1 - SECONDARY ANCHOR (tall)
    {
      id: 'case1',
      type: 'case-study',
      className: 'md:col-span-1 md:row-span-3',
      image: '/finetuning.png',
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'ML Model Optimization',
        subtitle: 'RAG vs Fine-Tuning Framework',
        link: 'https://meghcodes.notion.site/meghcodes/Retrieval-augmented-generation-v-s-fine-tuning-237b069a66e74c78b89386696e3e8e99'
      }
    },
    // Case Study 2 - Secondary tall (different height)
    {
      id: 'case2',
      type: 'case-study',
      className: 'md:col-span-1 md:row-span-2',
      image: '/llmhal.png',
      gradient: 'from-beige-300 to-beige-400',
      content: {
        title: 'AI Trust & Safety',
        subtitle: 'Chain of Verification',
        link: 'https://meghcodes.notion.site/Mitigating-Hallucinations-in-LLMs-Chain-of-Verification-CoVe-7f53dffe58024656857b7cecd74fa443?pvs=4'
      }
    },
    // Case Study 3 - Secondary medium tall
    {
      id: 'case3',
      type: 'case-study',
      className: 'md:col-span-1 md:row-span-2',
      image: '/hello.png',
      gradient: 'from-primary-300 to-primary-400',
      content: {
        title: 'ML Infrastructure',
        subtitle: 'Vector Database Platform',
        link: 'https://meghcodes.notion.site/Vector-Databases-6453b69dc6644d649fe4f79d5ac09099?pvs=4'
      }
    },
    // Resume Card - Tertiary utility
    {
      id: 'resume',
      type: 'link',
      className: 'md:col-span-1 md:row-span-1',
      icon: FileText,
      gradient: 'from-beige-300 to-beige-400',
      content: {
        title: 'Resume',
        value: 'View CV',
        link: '/cv.pdf'
      }
    },
    // Quote Card - Full width visual break
    {
      id: 'philosophy',
      type: 'quote',
      className: 'md:col-span-3 md:row-span-1',
      gradient: 'from-primary-300 to-primary-400',
      content: {
        quote: 'The best products emerge from deep customer empathy, rigorous experimentation, and a relentless focus on outcomes over outputs.',
        author: 'My Product Philosophy'
      }
    },
    // Research Interests Header - Wide secondary
    {
      id: 'research-header',
      type: 'section-header',
      className: 'md:col-span-2 md:row-span-1',
      gradient: 'from-beige-300 to-beige-400',
      content: {
        text: 'Research Interests',
        description: 'Designing transparent and accountable AI systems for high-stakes human decision-making.',
        link: '#research'
      }
    },
    // Research Interest 1 - Tertiary compact
    {
      id: 'research1',
      type: 'research',
      className: 'md:col-span-1 md:row-span-1',
      content: {
        title: 'Responsible & Safe AI'
      }
    },
    // Research Interest 2 - Tertiary compact
    {
      id: 'research2',
      type: 'research',
      className: 'md:col-span-1 md:row-span-1',
      content: {
        title: 'Explainable / Interpretable Machine Learning'
      }
    },
    // Research Interest 3 - Tertiary compact
    {
      id: 'research3',
      type: 'research',
      className: 'md:col-span-1 md:row-span-1',
      content: {
        title: 'Human-Centered & Stakeholder-Aware AI'
      }
    },
    // Research Interest 4 - Tertiary compact
    {
      id: 'research4',
      type: 'research',
      className: 'md:col-span-1 md:row-span-1',
      content: {
        title: 'AI Accountability, Governance & Systemic Risk'
      }
    }
  ]

  const renderCard = (card) => {
    const baseClasses = "group relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
    
    switch (card.type) {
      case 'location':
        return (
          <motion.a
            key={card.id}
            href={card.content.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} overflow-hidden h-[200px] relative bg-gradient-to-br from-gray-100 to-gray-200`}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
              <rect width="400" height="280" fill="#f5f5f5"/>
              <rect x="60" y="50" width="100" height="70" fill="#e8f5e9" opacity="0.7" rx="6"/>
              <rect x="180" y="80" width="120" height="80" fill="#c8e6c9" opacity="0.6" rx="6"/>
              <rect x="100" y="130" width="90" height="60" fill="#a5d6a7" opacity="0.5" rx="6"/>
              <circle cx="300" cy="70" r="25" fill="#81c784" opacity="0.6"/>
              <path d="M 40 200 Q 90 185 140 200 T 240 200" stroke="#64b5f6" strokeWidth="3" fill="none" opacity="0.7"/>
              <path d="M 260 160 Q 310 145 360 160" stroke="#64b5f6" strokeWidth="2" fill="none" opacity="0.6"/>
              <text x="200" y="30" textAnchor="middle" fill="#666" fontSize="18" fontWeight="600" opacity="0.8">Hyderabad</text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#3B82F6"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
              <p className="text-sm font-medium text-gray-600 mb-1">{card.content.title}</p>
              <p className="text-base font-semibold text-gray-900">{card.content.value}</p>
            </div>
          </motion.a>
        )

      case 'building':
        return (
          <motion.a
            key={card.id}
            href={card.content.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} overflow-hidden h-[200px] relative bg-gradient-to-br from-teal-700 to-teal-800 p-8 flex items-center justify-center`}
          >
            <div className="text-white text-2xl font-medium leading-relaxed">
              {card.content.text}
              <span className="ml-2 inline-block transform rotate-45">↗</span>
            </div>
          </motion.a>
        )

      case 'project':
        return (
          <motion.a
            key={card.id}
            href={card.content.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} overflow-hidden relative bg-white border-2 border-gray-200 hover:border-primary-500 p-8 flex flex-col justify-center`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{card.content.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{card.content.description}</p>
            <ExternalLink 
              size={20} 
              className="absolute top-6 right-6 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" 
            />
          </motion.a>
        )

      case 'education':
        const EduIcon = card.icon
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} p-6 min-h-[140px] flex flex-col justify-between`}
            style={{ background: getGradientStyle(card.gradient) }}
          >
            <EduIcon size={32} className="text-gray-900" />
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                {card.content.degree}
              </p>
              <p className="font-bold text-lg text-gray-900 mb-1">
                {card.content.university}
              </p>
              <p className="text-sm font-semibold text-gray-800">
                GPA: {card.content.gpa}
              </p>
            </div>
          </motion.div>
        )

      case 'social':
      case 'link':
        const Icon = card.icon
        const hasGradient = card.gradient
        const isLinkedIn = card.id === 'linkedin'
        return (
          <motion.a
            key={card.id}
            href={card.content.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} p-6 min-h-[140px] flex flex-col justify-between ${
              !hasGradient ? 'bg-white border-2 border-gray-200 hover:border-primary-500' : ''
            }`}
            style={hasGradient ? { background: getGradientStyle(card.gradient) } : {}}
          >
            {isLinkedIn ? (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="3" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                <circle cx="7.5" cy="7.5" r="1.5" fill="#1a1a1a"/>
                <rect x="6" y="10" width="3" height="8" fill="#1a1a1a"/>
                <rect x="11" y="10" width="3" height="8" fill="#1a1a1a"/>
                <path d="M 14 13 C 14 11.5 15 10.5 16.5 10.5 C 18 10.5 18.5 11.5 18.5 13 L 18.5 18 L 16 18 L 16 13.5 C 16 13 15.5 12.5 15 12.5 C 14.5 12.5 14 13 14 13.5 L 14 18" fill="#1a1a1a"/>
              </svg>
            ) : (
              Icon && <Icon size={32} className={hasGradient ? 'text-gray-900' : 'text-gray-700'} />
            )}
            <div>
              <p className={`text-sm font-medium mb-1 ${hasGradient ? 'text-gray-700' : 'text-gray-500'}`}>
                {card.content.title}
              </p>
              <p className={`font-bold text-lg ${hasGradient ? 'text-gray-900' : 'text-gray-900'}`}>
                {card.content.value}
              </p>
            </div>
            <ExternalLink 
              size={16} 
              className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                hasGradient ? 'text-gray-700' : 'text-gray-700'
              }`} 
            />
          </motion.a>
        )

      case 'section-header':
        return (
          <motion.a
            key={card.id}
            href={card.content.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} overflow-hidden h-[140px] relative p-6 flex flex-col justify-center`}
            style={{ background: getGradientStyle(card.gradient) }}
          >
            <div className="text-gray-900 text-xl font-semibold mb-2">
              {card.content.text}
              <span className="ml-2 inline-block">→</span>
            </div>
            {card.content.description && (
              <p className="text-sm text-gray-700 leading-snug">{card.content.description}</p>
            )}
          </motion.a>
        )

      case 'research':
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} bg-white border-2 border-gray-200 p-6 flex items-center justify-center text-center min-h-[140px]`}
          >
            <h3 className="text-base font-semibold text-gray-900 leading-snug">{card.content.title}</h3>
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
            transition={{ duration: 0.5 }}
            className={`${baseClasses} ${card.className} bg-white border-2 border-gray-200 hover:border-primary-500 min-h-[320px] overflow-hidden`}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={card.image} 
                alt={card.content.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
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

      case 'quote':
        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Left Sidebar */}
      <div className="w-full md:w-96 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto p-8 md:p-12 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg mx-auto md:mx-0">
              <img 
                src="/meghana-profile.jpg?v=3"
                alt="Meghana Denduluri"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Meghana Denduluri
          </h1>
          {/* <p className="text-gray-700 leading-relaxed mb-6">
            Product Manager with an Engineering Brain
          </p> */}

          {/* Bio */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Product Manager with an Engineering Brain. Learning how to make AI feel simple, honest, and genuinely useful. I care a lot about listening to users before building anything clever, and I'm increasingly drawn to responsible AI — exploring how we keep intelligent systems grounded in human intent.
          </p>

          {/* Contact Email */}
          <p className="text-sm text-gray-600 mb-8">
            Email me at{' '}
            <a href="mailto:dmeghana18@gmail.com" className="text-primary-600 hover:underline font-medium">
              dmeghana18@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs text-gray-500 border-t border-gray-200 pt-6"
        >
          <p>© {new Date().getFullYear()} Meghana Denduluri</p>
          <p className="mt-2">Built with React, Tailwind CSS & Framer Motion</p>
        </motion.div>
      </div>

      {/* Scrollable Right Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 md:p-12 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What I'm Building
            </h2>
            <p className="text-gray-600 text-lg">
              My work, thoughts, and the problems I'm solving
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto pb-12">
            {rightCards.map((card) => renderCard(card))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BentoLayout
