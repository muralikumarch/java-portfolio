import React from 'react'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/muralikumarch',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/chvmuralikumar/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      url: 'https://x.com/MuraliKumarCh',
      label: 'X (Twitter)'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black text-white border-t border-gray-800/50">
      {/* Background effect */}
      <div className="absolute inset-0 tech-background opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold gradient-text hover:scale-105 transition-transform mb-4 inline-block"
            >
              Venkata Murali Kumar Chintala
            </button>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed text-sm">
              Technical Lead Manager with full stack application and cloud technologies expertise, passionate about building scalable solutions 
              and helping teams deliver software faster and more securely.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass p-2.5 rounded-xl text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 gradient-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                  >
                    → {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 gradient-text-primary">Get In Touch</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a 
                  href="mailto:muralikumar.ch@gmail.com"
                  className="hover:text-primary-400 transition-colors duration-300 block"
                >
                  ✉ muralikumar.ch@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Available for Remote Work</span>
              </p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:translate-x-1 font-medium"
              >
                Let's connect →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-gray-400 text-sm flex flex-wrap items-center justify-center gap-1">
            <span>© {currentYear} Venkata Murali Kumar Chintala.</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="text-red-500 animate-pulse" size={14} fill="currentColor" />
              and lots of ☕
            </span>
          </div>
          
          <div className="text-gray-400 text-sm">
            <span className="flex flex-wrap items-center justify-center gap-2">
              <span>Built with React</span>
              <span className="hidden sm:inline">•</span>
              <span>Tailwind CSS</span>
              <span className="hidden sm:inline">•</span>
              <span>Framer Motion</span>
            </span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 card-glass p-3 rounded-full shadow-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 group border border-primary-500/30 hover:border-primary-500"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}

export default Footer

