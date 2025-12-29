import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Lead',
      company: ' RCG Global Services (India) Pvt Ltd',
      location: 'Remote, Chennai, India',
      period: 'July 28, 2025 - Present',
      description: 'Architecting and delivering enterprise-grade cloud-native applications for international clients, specializing in high-performance Java backends and scalable Azure infrastructures.',
      achievements: [
        'Architected and directed the successful migration of core applications to scalable microservices architecture, driving technical strategy and optimizing infrastructure utilization on Azure Cloud Services.',
        'Designed and implemented strategic, cost-effective cloud solutions utilizing key Azure components, including API Management (for secure gateway governance), Container Apps (for microservice orchestration), and Azure Functions (for event-driven components).',
        'Defined the team’s long-term technical roadmap, bridging business objectives with technical solutions to ensure high scalability, security, and continuous application performance optimization.',
        'Standardized architectural patterns (e.g., Clean Architecture) and coding best practices (SOLID principles) across the entire Java codebase to guarantee system security and long-term maintainability.',
        'Guided the full-stack development lifecycle, specializing in building high-throughput backend services using Java and Spring Boot for complex business logic, alongside robust RESTful API design.',
        'Instilled and enforced rigorous software quality standards, emphasizing Test-Driven Development (TDD) and leading the implementation of comprehensive unit, integration, and end-to-end testing frameworks.',
        'Executed deep-dive performance tuning on critical applications and database queries (e.g., PostgreSQL, MySQL), ensuring systems operate at peak efficiency and stability.',
        'Conducted mandatory, constructive code reviews across the entire team to uphold high coding standards technical quality, and security compliance. ',
        'Led the entire Agile Software Development Lifecycle for a high-performing engineering team, managing all facets of project delivery from sprint planning and resource allocation to timeline management.',
        'Spearheaded DevOps maturity by automating and maintaining CI/CD pipelines using Azure DevOps, which significantly reduced deployment lead times and increased feature delivery reliability.',
        'Mentored and guided developers in technical skills and career growth, fostering a collaborative culture of continuous learning and technical excellence crucial for retention and performance.',
        'Consistently delivered predictable and rapid feature releases, ensuring project timelines were met and often exceeded through effective project governance. '
      ],
      technologies: ['Java', 'Spring Boot', 'Azure Cloud', 'Angular', 'Microservices', 'Azure DevOps']
    },
          {
        title: 'Principal Java Developer',
        company: ' Parexel International (India) Pvt. Ltd',
        location: 'Remote, Hyderabad, India',
        period: 'September 22, 2014 – June 13, 2025',
        description: 'Architected and delivered high-performance, multi-tiered Java/Spring Boot microservices that improved user experience by 25% , while securing mission-critical healthcare data through OAuth 2.0 and optimizing enterprise-scale Oracle/MySQL databases',
        achievements: [
          'Directed full-stack Java/J2EE application development utilizing Spring and Spring Boot frameworks. This involved architecting and implementing multi-tiered, scalable solutions that resulted in a 25% enhancement in user experience and a significant reduction in application loading times through optimized data retrieval and processing logic. ',
          'Engineered and deployed highly scalable, secure enterprise applications using Java and the Spring Framework, ensuring robust and efficient system performance characterized by low latency and high throughput for mission-critical business operations.',
          'Constructed and maintained RESTful APIs and microservices architectures to facilitate seamless system integration and real-time, inter-service communication, enabling modular and independently deployable components.',
          'Leveraged Object-Relational Mapping (ORM) tools such as Hibernate and JPA for sophisticated database transaction management, incorporating advanced performance optimization techniques like caching strategies and lazy loading to minimize database load and enhance application responsiveness.',
          'Instituted comprehensive security protocols, including multi-factor authentication and fine-grained authorization mechanisms, through the implementation of Spring Security, OAuth 2.0, and JWT to safeguard sensitive data and prevent unauthorized system access. ',
          'Orchestrated the development and optimization of full-stack applications, creating responsive, interactive, and reusable front-end components with frameworks such as Angular and JavaScript to ensure an intuitive and engaging user journey across all devices. ',
          'Facilitated the integration of backend services with front-end interfaces via RESTful APIs, delivering dynamic and seamless user experiences through real-time data updates and efficient asynchronous request handling. ',
          'Improved overall component modularity and long-term maintainability by employing Dependency Injection (DI) principles, which also enhanced the testability of the codebase by allowing for the use of mock services. ',
          'Leveraged the Microsoft Power Platform for the rapid design, configuration, and deployment of custom canvas and model-driven business applications, significantly accelerating the delivery of solutions for internal process automation and data visualization. ',
          'Oversaw the complete lifecycle of relational database schemas for Oracle and MySQL environments, from initial design and optimization to ongoing administration, ensuring high standards of data integrity, consistency, and accessibility. ',
          'Enhanced database performance and efficiency by implementing advanced strategies including indexing, partitioning, query tuning, and the development of stored procedures to support high-volume transactional systems. ',
          'Conducted rigorous application architecture reviews, design evaluations, and code inspections to ensure strict compliance with established development standards and identify potential performance bottlenecks or security vulnerabilities early in the lifecycle. ',
          'Formulated and executed comprehensive, end-to-end testing strategies, encompassing unit, integration, and UI automation tests with frameworks like JUnit, Mockito, and Cucumber, to validate application functionality against business requirements. ',
          'Applied formal development methodologies, including Test-Driven Development (TDD) and BehaviorDriven Development (BDD), to systematically elevate application quality, reliability, and long-term stability. ',
          'Performed systematic code reviews and maintained detailed API documentation using tools such as Swagger to uphold code quality with SonarQube, ensure clarity for developers, and foster a culture of shared ownership. ',
          'Engineered and managed CI/CD pipelines using Jenkins, Maven, and ANT to fully automate the build, testing, and deployment lifecycle, thereby reducing manual errors and accelerating release cycles. ',
          'Utilized version control systems, including Git and SVN, adhering to industry best practices for branching strategies and peer code reviews to maintain a clean and traceable code history. ',
          'Managed the deployment of containerized applications utilizing Docker, ensuring environmental consistency from development through to production.'
        ],
        technologies: ['Java', 'Springboot', 'Oracle', 'Microservices', 'Azure', 'Microsoft Power Platform', 'Angular']
      },
    {
      title: 'Senior Software Engineer',
      company: 'Kony IT Services Pvt. Ltd',
      location: 'Hyderabad, India',
      period: 'October 21, 2013 – September 5, 2014',
      description: 'Directed the architectural strategy and delivery of high-performance mobile solutions, bridging enterprise Java/J2EE backends with the Kony Mobile Platform to support large-scale, secure digital transformations.',
      achievements: [
        'Directed the architectural strategy for secure, high-performance mobile applications, specializing in Kony Platform integration with robust Java/J2EE backends in mobile application performance.',
        'Supervised the design and implementation of resilient Enterprise Systems, ensuring reliable, asynchronous data exchange and high availability for mobile clients. ',
        'Spearheaded the technical discovery for large-scale mobile projects, serving as the key liaison to translate strategic business objectives into precise technical design specifications and roadmaps. ',
        'Drove complex, multi-functional mobile application development using the Kony Mobile Platform and JavaScript, including the direction and implementation of custom UI/UX design components. ',
        'Architected and implemented mission-critical, mobile-optimized RESTful APIs (JAX-RS) using Java/J2EE, focusing on payload efficiency and low response times for mobile consumption. ',
        'Instituted and enforced organization-wide security protocols for mobile access, Session, JWT, and RoleBased Access Control (RBAC) to secure sensitive data via application services.'
      ],
      technologies: ['Java', 'Spring framework', 'Oracle', 'Servlets/Jsp', 'Tomcat', 'Linux', 'Jira', 'Ant', 'Jenkins' ]
    },
    {
      title: 'Software Engineer',
      company: 'Wipro Technologies',
      location: 'Hyderabad, India',
      period: 'March 22, 2010 – October 18, 2013 ',
      description: 'Designed and developed scalable enterprise web applications, focusing on robust server-side logic using Core Java and the Spring framework while delivering dynamic, component-based user interfaces.',
      achievements: [
        'Develop and implement robust server-side business logic and services utilizing Core Java and modern principles of the Spring framework.',
        'Manage data interaction by integrating applications with the database layer, specifically demonstrating expertise in Oracle 10g for querying, transaction management, and performance optimization. ',
        'Ensure application integrity by configuring, deploying, and maintaining Java/J2EE applications within the JBOSS 5 application server environment.',
        'Contribute to the presentation layer using JSP (Java Server Pages) for dynamic content generation and integration with Servlet back-end components.',
        'Create highly interactive and customized UI components to enhance the functionality and user experience of web applications.',
        'Drive front-end development using foundational web technologies including JavaScript, HTML, and CSS to build responsive and aesthetically pleasing interfaces.',
        'Leverage specialized UI frameworks, such as PrimeFaces, to quickly develop rich, component-based user interfaces and complex data displays.',
        'Demonstrate strong technical expertise and consistent engagement throughout all phases of the Software Development Life Cycle (SDLC), including requirements analysis, design, coding, testing, and deployment.',
        'Maintain and support existing Java/J2EE web applications, providing rapid analysis and resolution of technical issues in production environments.',
        'Adhere to best practices in coding standards, version control, and application architecture to ensure high quality, scalable, and maintainable software'
      ],
      technologies: ['Java', 'J2EE', 'Struts', 'Oracle', 'Tomcat', 'JBoss', 'JIRA','Jenkins']
    }
  ]

  return (
    <section id="experience" className="py-14 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">Professional Experience</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            My journey in DevOps and cloud engineering, building scalable solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-800"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full border-2 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[47%] ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
                }`}>
                  <div className="bg-gray-900 rounded-xl p-4 card-hover border border-gray-800">
                    {/* Header */}
                    <div className="mb-3">
                      <div className="flex items-center text-xs text-primary-400 mb-1.5">
                        <Calendar size={14} className="mr-1.5" />
                        {exp.period}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-gray-300 mb-1.5 text-sm">
                        <Briefcase size={14} className="mr-1.5" />
                        {exp.company}
                      </div>
                      {exp.location && (
                        <div className="flex items-center text-gray-400 text-xs">
                          <MapPin size={14} className="mr-1.5" />
                          {exp.location}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-gray-300 mb-3 leading-relaxed text-sm">{exp.description}</p>
                    )}

                    {/* Achievements */}
                    <div className="mb-3">
                      <h4 className="font-semibold text-white mb-1.5 text-sm">Key Achievements:</h4>
                      <ul className="space-y-0.5">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 text-gray-200 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

