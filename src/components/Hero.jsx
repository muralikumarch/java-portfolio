import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-950 pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 tech-background"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 relative z-10"
          >
            <div className="space-y-3">
              {/*   
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Open to Remote Opportunities
              </div>
              */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-extrabold text-white leading-tight"
              >
                Hi, I'm <span className="gradient-text animate-gradient whitespace-nowrap">Murali Kumar</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400"
              >
                Technical Lead Manager
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base text-gray-400 max-w-2xl leading-relaxed"
              >
              I am a highly accomplished Full-Stack Technical Lead with over 15 years of experience architecting and deploying high-performance systems for the Healthcare, Banking, and E-Commerce sectors. I specialize in building scalable, enterprise-grade applications using the Java/Spring ecosystem and modern cloud architectures.
</motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary inline-flex items-center justify-center gap-2 group">
                <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                Get In Touch
              </button>
              <a
                href="/Venkata_Murali_Kumar_Chintala_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex space-x-4"
            >
              <a 
                href="https://github.com/muralikumarch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/chvmuralikumar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:muralikumar.ch@gmail.com"
                className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-glow"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-cyan-500 p-1 animate-float">
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black p-3 overflow-hidden ring-2 ring-primary-500/50">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src="/myphoto.png"
                      alt="Professional avatar"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = '/myphoto.png' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-300 hover:text-primary-400 transition-all duration-300 animate-bounce flex flex-col items-center gap-1 group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs text-gray-400 group-hover:text-primary-400">Scroll</span>
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

