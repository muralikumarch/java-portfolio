import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Cloud, BarChart3, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: Code2 },
    { label: 'Projects Deployed', value: '10+', icon: Cloud },
    { label: 'Cloud & AI Certifications', value: '8+', icon: BarChart3 },
    { label: 'Teams Supported', value: '10+', icon: Users },
  ]

  return (
    <section id="about" className="relative py-16 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 tech-background"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Technical Lead Manager with full stack application and cloud technologies — open to remote opportunities
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-glass card-hover-glow p-5 sm:p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text-primary mb-4 relative">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base relative">
              Accomplished Full-Stack Technical Lead with 15+ years of progressive experience in the design and deployment of enterprise-scale applications. Expert in Java, Spring Boot, and Microservices, with a deep understanding of the full software development lifecycle within highly regulated industries like Banking and Healthcare.

I bridge the gap between complex backend architecture and modern frontend experiences (Angular), while leveraging AWS, Azure, and Microsoft Power Platform to drive digital transformation. A dedicated Agile leader committed to technical excellence and delivering scalable, high-availability solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="card-glass p-4 sm:p-5 rounded-2xl">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Full Stack Technical Lead specializing in scalable Java microservices, cloud-native architectures, and enterprise digital transformation across Healthcare, Banking, and E-Commerce. I have architected multi-tiered solutions resulting in a 25% enhancement in user experience, increased application speeds by 20%, and spearheaded DevOps maturity through automated CI/CD pipelines.
              </p>
            </div>
            
            <div className="card-glass p-4 sm:p-5 rounded-2xl">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                My toolkit includes Java/Spring Boot, Angular, and Hibernate for robust application development. I design high-throughput backend services using Azure (API Management, Container Apps, Functions) and AWS (Lambda, API Gateway, EC2). I build secure, mission-critical platforms incorporating OAuth 2.0, JWT, and SOLID principles while leveraging the Microsoft Power Platform for rapid low-code business solutions.
              </p>
            </div>

            <div className="card-glass p-4 sm:p-5 rounded-2xl">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Currently leading technical strategy at RCG Global Services, where I directed the migration of core applications to a microservices architecture on Azure Cloud Services. I am also integrating cutting-edge AI capabilities, holding recent certifications as an AWS AI Practitioner and Azure AI Engineer Associate. Open to remote opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass card-hover-glow p-4 text-center relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 transition-all duration-500"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-primary-400 group-hover:text-primary-300 transition-colors" size={22} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

