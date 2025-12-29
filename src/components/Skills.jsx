import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Container, GitBranch, Server, BarChart3, Terminal, Shield, User } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Container,
      title: 'Backend Engineering',
      skills: ['Java/J2EE & Spring Framework', 'Spring Boot & Microservices Architecture', 'Hibernate & JPA', 'RESTful API', '..more'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Server,
      title: 'Frontend Technologies',
      skills: ['Angular & PrimeFaces', 'JavaScript (ES6+), HTML5, & CSS', 'Responsive Component Development'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GitBranch,
      title: 'DevOps & Automation',
      skills: ['Jenkins', 'Azure DevOps', 'Maven, ANT, Git, & SVN', 'Docker & Kubernetes'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & Virtualization',
      skills: ['Microsoft Azure: AKS, App Service, Functions, API Management', 'AWS: EC2, S3, RDS, Lambda, API Gateway', 'Environment Management: Tomcat, JBoss & Web Servers'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Database & Monitoring',
      skills: ['Relational: PostgreSQL, MySQL, Oracle 10g', 'Performance: Query Optimization, Indexing, & Partitioning', 'Observability: Splunk, ELK Stack, & JMX'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Security & Quality',
      skills: ['Authentication: OAuth 2.0, JWT, and Spring Security', 'Access Control: RBAC (Role-Based Access Control)', 'Quality Assurance: JUnit, Mockito, SonarQube, TDD, and BDD'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Terminal,
      title: 'AI & Low-Code Platforms',
      skills: ['GenAI: AWS Certified AI Practitioner & Azure AI Engineer', 'Microsoft Power Platform: Canvas/Model-Driven Apps & Power Pages', 'AI Tooling: GitHub Copilot & Copilot Studio'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: User,
      title: 'Methodologies & Leadership',
      skills: ['Agile Excellence: Scrum, Kanban, Sprint Planning, and Pair Programming', 'Team Leadership: Leading cross-functional teams and conducting code reviews', 'Collaboration: JIRA, Confluence, and ADO Boards'],
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="relative py-16 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 tech-background opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to build and operate reliable systems
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants} 
              className="card-glass card-hover-glow p-5 relative group overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-br ${category.color} rounded-xl p-2.5 mr-3 shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="text-white" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start group/item"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`}></div>
                      <span className="text-gray-300 font-medium text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

