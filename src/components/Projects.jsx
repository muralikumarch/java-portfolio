import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Cloud, Container, Shield, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'ABOS OSMS Platform Modernization',
      description: 'The ABOS OSMS Platform Modernization project is a strategic, multi-year initiative to comprehensively reengineer the legacy Orthopaedic Surgeons Management System (OSMS) and develop a new, integrated Analytics & Reporting Platform. This essential overhaul transitions the core system from a tightly coupled, monolithic Java structure to a highly scalable, secure, and performant microservices architecture hosted entirely on Azure. The primary business goal is to significantly improve operational efficiency, reliably support future organizational growth, and enhance the quality of data and compliance management necessary for the certification and Maintenance of Certification (MOC) processes for all orthopaedic surgeons. This modernization was critical due to the technical debt and scaling limitations inherent in the previous platform',
      icon: Cloud,
      technologies: [ 'Java', 'Spring Boot', 'Hibernate/JPA', 'RESTful APIs', 'Junit', 'Angular', 'Container Apps/AKS', 'API Management', 'Azure SQL DB', 'Azure DevOps (CI/CD)', 'Azure SQL Database (MSSQL)' ],
      features: [
        'Modernized a mission-critical application (OSMS) to significantly improve long-term security, scalability, and maintainability.',  
'Transitioned to a cloud-native microservices architecture on Azure, enabling independent deployment, high fault isolation, and rapid scalability.', 
'Microservices Architecture: Service Decomposition: Decomposed the monolithic application into independent, decoupled services, including: ',
'Security & Access Control Service: To manage all user authentication, roles, and permissions (Diplomates, Candidates, Residents, and Staff).',
'Workflow & Orchestration Service: Manages the complex, multi-stage flow of the entire certification and maintenance of certification (MOC) processes, utilizing asynchronous communication patterns for reliability.',
'Audit Logging Service: A critical service for compliance, meticulously logging all system and user activities related to data changes, financial transactions, and certification status updates, ensuring an immutable record for regulatory requirements.',
'Improved application performance, reducing data processing latency by up to 35% (a hypothetical but realistic metric based on the Azure migration context) and enhancing data reliability by leveraging an optimized Azure SQL Database architecture and implementing connection pooling strategies.',
'Streamlined the entire software development lifecycle (SDLC) with robust CI/CD automation, accelerating feature delivery.'
      ],
      github: '#',
      demo: '#',
      image: '🏛️'
    },
    {
      title: 'e-VCAS',
      description: 'e-VCAS is a modernization of a web-based clinical trial adjudication system (VCAS) to a microservices architecture on Azure. This initiative involved upgrading Spring Framework and Spring Boot, designing and developing RESTful APIs, and implementing Azure services for improved scalability, performance, and maintainability. VCAS primary function is to provide electronic Case Report Form (eCRF) functionality and automated adjudication process via a web-based interface for clinical trial protocols',
      icon: Cloud,
      technologies: ['Java 8', 'Angular', 'Spring', 'Spring boot', 'Hibernate', 'RESTful APIs', 'Oracle', 'Junit', 'Azure Services(Container Apps/AKS, API Management, Azure SQL DB, Azure DevOps (CI/CD)'],
      features: [
        'Modernized a legacy application to improve scalability and maintainability.', 
        'Transitioned to microservice architecture, enabling independent deployment and fault isolation.', 
        'Microservices Architecture: Decompose the monolithic application into smaller, independent services like eCRF Management Service to handles eCRF creation, storage, and retrieval, Adjudication Workflow Service to manages the adjudication process, rules, and workflows, User Management Service to handles user authentication, authorization, and roles (integration with the existing "User Manager Portal"), Query Management Service to manages queries related to eCRF data, Reporting Service to generates reports for clinical trials like Adjudication Results, Reconciliation, Review Management, Reviewer Workload Summary, Reviewer Activity, Document Status Tracking, Admin Query Tracking, Episode State Tracking, Subject Change Tracking, Episode Monitoring, Reviewer Query and Response, Admin Query Error, Open Admin Query Report and Audit Logging History Service for logs all system activities for compliance and also end-to-end activity of the episode life cycle.',
        'Leveraged Azure cloud services for enhanced reliability and cost-effectiveness.', 
        'Improved application performance through optimized design and Azure services.', 
        'Streamlined the development process with CI/CD pipelines.'
      ],
      github: '#',
      demo: '#',
      image: '🏠'
    },
    {
      title: 'User Manager Portal',
      description: 'User Manager Portal, a critical application within a clinical trial system, to streamline user access and study assignments. This project addressed the challenges of managing user roles, study associations, and overall system security. The modernization effort focused on enhancing user management functionalities (creating, editing, deleting users, and assigning roles), study management (creating, reading, updating, and deleting studies), and implementing robust role-based access control (RBAC) to ensure data security, improve workflow efficiency, and provide a foundation for future scalability and maintainability of the application',
      icon: BarChart3,
      technologies: ['Java 8', 'Angular', 'Spring', 'Spring boot', 'Hibernate', 'RESTful APIs', 'Oracle', 'Junit', 'Azure Services(Container Apps/AKS, API Management, Azure SQL DB, Azure DevOps (CI/CD)'],
      features: [
        'Robust authentication and fine-grained RBAC for enhanced security.',
        'Efficient user and study management functionalities.',
        'Streamlined process for assigning users to studies based on their roles.',
        'Scalable and maintainable user access control architecture.'
      ],
      github: '#',
      demo: '#',
      image: '👥'
    },
    {
      title: 'Virtual Clinical Adjudication System (VCAS)',
      description: 'VCAS is a proprietary web-based application that facilitates central online management of adjudication activities. VCAS primary function is to provide electronic Case Report Form (eCRF) functionality and automated adjudication process via a web-based interface for clinical trial protocols. VCAS application operates in a hosted environment and can accommodate any number of users and reviewers with specific privileges based on their role',
      icon: Container,
      technologies: ['Java', 'Servlets/JSP', 'Spring', 'Spring boot', 'Hibernate', 'Oracle', 'Junit', 'Tomcat', 'Linux'],
      features: [
        'Alleviates the need for committee members to meet in person, saving time and cost',
        'Enables international review committees utilizing the best physicians for a therapeutic area',
        'Reduces cycle time for review committee to perform assessments',
        'Improves data quality through use of eCRFs and online edit checks',
        'Workflow and electronic query tools within VCAS in streamlined, highly efficient review processes.'
      ],
      github: '#',
      demo: '#',
      image: '🏦'
    },
    {
      title: 'PMED Interface Rebuild',
      description: 'PMED is an electronic document management system based on OpenText Content Server. Currently PAREXEL has five major releases behind the latest version of PMED (Content Server - CS16) and no longer on a supported version. As a result, we are not realizing the full business benefits of the platform and experience frequent down time and poor system performance. This is the first project and will Stabilize and synchronize nonproduction environments by copying the Production environment back to DEV and Staging, convert interfaces from LAPI API to new SOAP API required by CS16, Redesign 13 workflows for optimal performance on the current version of PMED, build new environment with CS16 to allow for better performance. ',
      icon: Shield,
      technologies: ['Java', 'Servlets/JSP', 'Spring', 'Spring boot', 'Hibernate', 'Oracle', 'Junit', 'Tomcat', 'Linux'],
      features: [
        'In Interface release 1, building the foundation for replacing soon to be discontinued LAPI API calls to use the new PMED API façade.',  
        'Implemented configuration files loading mechanism based on application to easy replace properties in API.',
        'In release 2 focused on the changes to the IH-PMED interface that are necessary to make this application compatible with Content Server 16, and identified LAPI based methods in use in Impact Harmony',
        'Implemented creates new PMED folder applies categories and attributes provided to a node created for IH interface that is being replaced to ensure upward compatibility with the Current OpenText system (CS16).',
        'Writing articles in Confluence for future reference.',
        'Configured Jenkins for continuous build integration tool for project maven builds and for deployment.'
      ],
      github: '#',
      demo: '#',
      image: '🧾'
    },
    {
      title: 'Apollo',
      description: 'This web application is based on electronic source data capturing and trail management system in Early Phase research segment. Which accommodates modern Early Phase Requirements as well as regulatory and standard industry requirements, to increase customer satisfaction and loyalty by optimizing efficiency and increasing quality in conducting clinical trials. Apollo is an integrated clinical trial management system covering almost all aspects of clinical studies from financial management to the reporting of clinical data. Apollo includes various modules as high level: LIMS, Clinical Trail Management, Recruiting Management, eSource, Design & Reporting. LIMS involves Study setup, Lab workflow, sampling data, Profile setup. Clinical Trail Management involves various reporting stages like Data management reports, Lab results trend reporting etc., Recruiting Management involves Subject Information, Lab specific details etc. ',
      icon: Container,
      technologies: ['Java', 'JSP', 'Servlets', 'JavaScript', 'Spring IOC', 'Spring MVC', 'Oracle', 'Junit', 'Tomcat', 'Linux', 'SVN', 'Maven'],
      features: [
        'Contributed to the development of an application using the agile software development process participating in Sprint planning, reviews, client demos, and Daily standup meetings.', 
        'Developed backend business API Services / Dao Services using spring framework features like Spring boot, IOC, MVC, Spring Batch and DAO modules and JPA for Entity layer', 
        'Involved in UI screen design for new screens along with business team. Worked on frontend UI web pages using JSP, CSS, HTML and Java Scripts', 
        'Writing articles in Confluence for future reference.',  
        'Configured Jenkins for continuous build integration tool for project maven builds and for deployment.', 
        'Developed various functional implementations in Workflow setups, Study setup, and sampling.', 
        'Prepared documentation like technical design documents, application configuration guide, user guide and maintenance guide '
      ],
      github: '#',
      demo: '#',
      image: '🔬'
    },
    {
      title: 'Citi Global Mobile App',
      description: 'This app is developed as a product with configuration options to support multiple countries (NA, UK, and other) functionalities for Citi. This app supports Android, iPhone, and Thin Client (TC) Channels and with a new UI design built on Kony 5.0 platform. The App now supports the following functionalities: Account Summary, Recent activity for checking and credit card accounts, including pending and future transactions and transaction search, Pay bills and view, change or cancel payments, Make or schedule future credit card payments, Transfer funds between linked Citi accounts, Push notifications for Bank and Credit cards, Send money to virtually anyone’s U.S. bank account with Popmoney, Deposit checks using Mobile Check Deposit, ATMs/branches location search, Contact Us, and Help, View the rewards (thank you points) balances, Snap Shot mode (for limited set of users) gives the flexibility to the users to view their balances without logging in to application. ',
      icon: BarChart3,
      technologies: [' Core Java', 'JavaScript', 'Kony 5.0 mobile platform'],
      features: [
        'Developed UI for TC Channels Rewards, ATMs/branches location search, Contact Us, and Help.', 
        'Involved in development of Snap Shot mode (for limited set of users) gives the flexibility to the users to view their balances without logging in to application.', 
        'Developed functionalities for Push notifications for Bank and Credit cards.', 
        'Mobile Banking Core: Engineered high-impact features including Mobile Check Deposit, P2P payments via Popmoney, and cross-account fund transfers',
        'SnapShot Mode: Developed a secure, limited-access balance view feature allowing users to check account status without a full application login.',
        'Middleware Integration: Leveraged Kony Integration Services (KIS) to sync high-throughput backend services for account summaries and real-time transaction history.',
        'Omni-Channel UI: Architected responsive UI screens using Kony Visualizer for Android, iPhone, and Thin Client channels, including Rewards and Location modules.',
        'Notification Engine: Implemented robust push notification services for banking alerts and credit card transaction updates.',
        'Performance Optimization: Conducted deep-dive performance tuning to reduce application launch times and improve overall system responsiveness.'      ],
      github: '#',
      demo: '#',
      image: '📱'
    },
    {
      title: 'Smart Data',
      description: 'This application is an online reporting tool that allows users to access corporate card transactions securely over the Internet. The application helps to expedite expense reporting by allowing Access and enhance transaction data. Create records for cash expenses. Perform cost allocation. Generate reports and exports. This application is authority-based i.e., the access to data and functions is determined by user type and assigned user authorities (permissions).  Issuer Administrators determines the various functions and data that are available to an Issuer. Issuer Administrators are responsible for enrolling companies to use the application for expense reporting. Issuer focus is typically high-level implementation, card and usage review, as well as support Generate reports and exports. This application is authority-based i.e., the access to data and functions is determined by user type and assigned user authorities (permissions).  Issuer Administrators determines the various functions and data that are available to an Issuer. Issuer Administrators are responsible for enrolling companies to use the application for expense reporting. Issuer focus is typically high-level implementation, card and usage review, as well as support activities. The issuer has access to all companies and accounts enrolled by your issuer. ',
      icon: Shield,
      technologies: ['Core Java', 'JSP', 'Spring Framework', 'JBoss 5', 'Oracle 11g'],
      features: [
        'Automated Expense Reporting - Streamlines the reporting lifecycle by allowing users to access, enhance, and manage transaction data directly via a secure web interface.',
        'Transaction Management - Provides comprehensive tools to create records for cash expenses and perform precise cost allocation across departments.',
        'Robust Reporting & Analytics - Generates high-level reports and data exports to assist in card usage reviews and financial auditing.',
        'Data Enhancement - Allows users to interact with and augment raw transaction data to ensure accuracy in corporate financial records.',
        'Authority-Based Access Control (RBAC) - Implements a strict permission-based model where data access and functional capabilities are dictated by specific user types and assigned authorities.',
        'Issuer Administration - Enables high-level administrators to determine available functions, manage data visibility, and oversee the enrollment of new companies into the system.',
        'Hierarchical Data Visibility - Ensures Issuers maintain high-level oversight with access to all accounts and companies enrolled under their specific jurisdiction.',
        'Secure Internet Access - Architected for mission-critical security, ensuring corporate card transactions are accessed safely over the internet using modern protocols.',
        'Company Enrollment - A dedicated workflow for Issuer Administrators to onboard and manage corporate clients for expense reporting services.',
        'Card Usage Review - Specialized tools for high-level implementation support and detailed review of corporate card activities.'
      ],
      github: '#',
      demo: '#',
      image: '💳'
    },
    {
      title: 'Beyond Enrollment Tool',
      description: 'Beyond Enrollment Tool is part of ALM (Account Level Management) platform. It contains HighValue and EnhancedValue. This application is intended to recognize the high spend cardholders and benefit the  issuers/cardholders. Issuers enroll program, registers the cardholders so that they participate in the program. These programs include an approval process where representatives validate the program and approve. ',
      icon: Shield,
      technologies: ['Core Java', 'JSP', 'Spring Framework', 'JBoss 5', 'Oracle 11g'],
      features: [
        'Tiered Value Recognition: Distinguishes between HighValue and EnhancedValue tiers to identify and reward high-spending cardholders.',
        'Issuer Program Enrollment: Provides a dedicated interface for Issuers to enroll in specific programs and manage their participation.',
        'Cardholder Registration: Facilitates the seamless registration of cardholders into recognized value programs to maximize benefits.',
        'Multi-Stage Approval Process: Implements a structured workflow where program details must be validated by authorized representatives prior to activation.',
        'Data Validation: Features built-in validation logic to ensure that all program and cardholder details meet compliance and benefit criteria.',
        'ALM Platform Integration: Built as a core component of the Account Level Management (ALM) ecosystem to ensure high scalability and data consistency.',
        'High-Spend Analytics: Intended to recognize and track high-value cardholder spend to better benefit both issuers and cardholders.',
        'Secure Authority Management: Utilizes authority-based access to ensure only authorized representatives can perform program validations and approvals.'
      ],
      github: '#',
      demo: '#',
      image: '💳'
    },
    {
      title: 'Monitoring 360 Solution Dashboard',
      description: 'This project aims to deploy a more reliable and scalable monitoring solution along with a user friendly and easy to use dashboard. This will replace the current monitoring solution. This system is capable of monitoring more than 600 applications and providing transaction monitoring capabilities. System provides Application monitoring, Alerting, Performance reporting, Systems monitoring, Dashboard for inventory information',
      icon: Shield,
      technologies: ['Java', 'JSP', 'RichFaces', 'Spring Framework', 'JBoss AS 4.2', 'Oracle 10g', 'Linux'],
      features: [
        'High-Scale Application Tracking: Engineered a robust system capable of monitoring more than 600 enterprise applications simultaneously.',
        'Transaction-Level Monitoring: Implemented deep-dive transaction monitoring capabilities to track request flows and identify bottlenecks in real-time.',
        'Comprehensive Systems Monitoring: Established full-stack observability, covering both application health and underlying system performance.',
        'Scalable Architecture: Deployed a highly reliable and scalable monitoring infrastructure designed to replace legacy systems and handle increasing enterprise loads.',
        'Performance Reporting: Integrated automated performance reporting tools to analyze system trends and long-term stability.',
        'Legacy System Migration: Directed the successful transition from the current monitoring solution to a modernized, high-availability platform.',
        'Unified Inventory Dashboard: Developed a user-friendly, centralized dashboard providing real-time inventory information and system status at a glance.',
        'Proactive Alerting System: Built a sophisticated alerting engine to notify stakeholders of system anomalies and performance degradations.',
        'Intuitive UX: Focused on delivering an easy-to-use interface to simplify complex data visualization for cross-functional teams.'
      ],
      github: '#',
      demo: '#',
      image: '🖥️'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 tech-background opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Work that reflects real impact across Healthcare, Banking, Retail, E-Commerce, and Manufacturing
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="card-glass card-hover-glow overflow-hidden group"
            >
              {/* Project Header with gradient accent */}
              <div className="relative p-4 border-b border-gray-800/50">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-accent-500"></div>
                <div className="flex items-start gap-2.5">
                  <div className="text-2xl flex-shrink-0 filter group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold gradient-text-primary mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
                    <div className="flex gap-2 mb-2">
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-primary-400 transition-all hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-400 hover:text-primary-400 transition-all hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p className="text-gray-400 leading-snug text-xs">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="p-4 border-b border-gray-800/50">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <span className="w-0.5 h-3 bg-gradient-to-b from-primary-500 to-accent-500"></span>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gradient-to-r from-gray-800/80 to-gray-900/80 hover:from-primary-900/40 hover:to-accent-900/40 text-gray-200 rounded-md text-xs font-medium border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="p-4">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <span className="w-0.5 h-3 bg-gradient-to-b from-primary-500 to-accent-500"></span>
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="text-gray-400 text-xs leading-snug group-hover/item:text-gray-300 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="card-glass inline-block p-8 rounded-2xl">
            <p className="text-lg text-gray-300 mb-6">
              Want to see more projects or discuss a collaboration?
            </p>
            <a
              href="https://github.com/muralikumarch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

