import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Please fill all fields. Message must be at least 10 characters.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: null, message: '' })
    try {
      const apiBaseRaw = (import.meta.env.VITE_API_BASE || '').trim()
      const API_BASE = apiBaseRaw ? apiBaseRaw.replace(/\/$/, '') : null

      if (!API_BASE) {
        const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject} (from ${formData.name})`)
        const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
        window.location.href = `mailto:muralikumar.ch@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
        setStatus({ type: 'success', message: 'Opening your email client…' })
        setFormData({ name: '', email: '', subject: '', message: '' })
        return
      }

      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error('Failed to send')
      setStatus({ type: 'success', message: json.sent ? 'Message sent via email ✅' : 'Message stored locally ✅' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: 'Sorry, something went wrong. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'muralikumar.ch@gmail.com',
      link: 'mailto:muralikumar.ch@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-9989225431',
      link: 'tel:+919989225431'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Available for Remote Work',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/muralikumarch',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chvmuralikumar/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'X',
      url: 'https://x.com/MuraliKumarCh',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="relative py-14 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 tech-background opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Let's discuss your DevOps challenges and explore how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold gradient-text-primary mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-3 rounded-xl hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl p-2.5 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="text-primary-400" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-0.5 text-sm">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-primary-400 transition-colors text-xs"
                          >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-xs">{info.value}</p>
                      )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-glass p-4 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-3">Follow Me</h3>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glass p-2.5 rounded-xl hover:bg-gray-800/60 transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                    aria-label={social.name}
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info 
            <div className="card-glass card-hover-glow p-4 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-sm sm:text-base font-bold gradient-text-primary mb-2 relative">Quick Response</h3>
              <p className="text-gray-400 mb-3 relative leading-relaxed text-xs">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400 relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available for new opportunities</span>
              </div>
            </div>
            */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-glass card-hover-glow p-5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-cyan-500"></div>
            <h3 className="text-lg sm:text-xl font-bold gradient-text-primary mb-5">Send a Message</h3>
            {status.type && (
              <div className={`mb-3 rounded-xl p-2.5 text-xs font-medium ${
                status.type === 'success' 
                  ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/10 text-red-400 border border-red-500/30'
              }`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-700 bg-gray-900/50 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-700 bg-gray-900/50 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-700 bg-gray-900/50 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 text-sm"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-700 bg-gray-900/50 text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-600 text-sm"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary inline-flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Send size={18} className={!isSubmitting ? "group-hover:translate-x-1 transition-transform" : ""} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact