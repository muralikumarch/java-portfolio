import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink} from 'lucide-react'

const certifications = [
	{
		title: 'AWS Certified AI Practitioner',
		issuer: 'Amazon Web Services (AWS)',
		image: 'aws-ai-practitioner-badge.png',
		issued: '2025',
		expires: '',
		credentialId: '',
		credUrl: 'https://www.credly.com/badges/5e894b23-c4f7-4a0a-8c51-111e6cda5d9f/linked_in?t=t59e2m',
		skills: ['AI and ML on AWS - Foundational','Foundation Models','Generative AI','Machine Learning']
	},
	{
		title: 'Azure AI Engineer Associate',
		issuer: 'Microsoft',
		image: 'microsoft-certified-associate-badge.svg',
		issued: '2024',
		expires: '',
		credentialId: '',
		credUrl: 'https://learn.microsoft.com/en-us/users/muralichintala/credentials/f5fcfca4028552c1',
		skills: ['Azure AI Services','Cognitive Services','Conversational AI']
	},
	{
		title: 'AWS Certified Developer Associate',
		issuer: 'Amazon Web Services (AWS)',
		image: 'aws-developer-associate-badge.png',
		issued: '2024',
		expires: '',
		credentialId: '',
		credUrl: 'https://www.credly.com/badges/7752e98a-4907-47c0-83c5-e24dad34ec82/public_url',
		skills: ['Amazon Web Services','Cloud Development','Serverless Applications']
	},
	{
		title: 'Azure Solutions Architect Expert',
		issuer: 'Microsoft',
		image: 'microsoft-certified-expert-badge.svg',
		issued: '2022',
		expires: '',
		credentialId: '',
		credUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/MuraliChintala/6C7FAE34BF5FE202?sharingId=C358ACBEE92CE50C',
		skills: ['Azure Architecture','Design identity, governance, and monitoring solutions','Design data storage solutions', 'Design business continuity solutions', 'Design infrastructure solutions']
	},
	{
		title: 'Power Platform Developer Associate',
		issuer: 'Microsoft',
		image: 'microsoft-certified-associate-badge.svg',
		issued: '2023',
		expires: '',
		credentialId: '',
		credUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/MuraliChintala/539C77EF02753BCD?sharingId=C358ACBEE92CE50C',
		skills: ['Create a technical design', 'Build Power Platform solutions','Implement Power Apps improvements', 'Extend the user experience', 'Develop integrations', 'Implement security and governance']
	},
	{
		title: 'Oracle Certified Professional Java SE 8 Programmer',
		issuer: 'Oracle',
		image: 'ocp-badge.png',
		issued: '2019',
		expires: '',
		credentialId: '',
		credUrl: 'https://www.credly.com/badges/691c6d44-6972-4ea0-9f2f-c0957f9943d5/public_url',
		skills: ['Java SE 8', 'Stream API', 'Lambda Expressions', 'Concurrency' ,'Functional Interfaces' ]
	},
	{
		title: 'Future AWS AI Engineer',
		issuer: 'Udacity',
		image: 'udacity-badge.png',
		issued: '2025',
		expires: '',
		credentialId: '',
		credUrl: 'https://www.udacity.com/certificate/e/b1521cc4-8152-11f0-baa2-4f8a84504dc0',
		skills: ['Amazon Bedrock', 'Amazon SageMaker', 'Amazon Lex', 'Generative AI', 'Machine Learning' ]
	},
	{
		title: 'Cloud Architect using Microsoft Azure',
		issuer: 'Udacity',
		image: 'udacity-badge.png',
		issued: '2025',
		expires: '',
		credentialId: '',
		credUrl: 'https://www.udacity.com/certificate/PCTYKH4S',
		skills: ['Azure Services', 'Azure Cloud Security', 'Cost Optimization and Monitoring', 'Designing Infrastructure and Managing Migration']
	},
	{
		title: 'Microsoft Power Up Program – Power Platform',
		issuer: 'Microsoft',
		image: 'microsoft-power-up-program-badge.png',
		issued: '2024',
		expires: '',
		credentialId: '',
		credUrl: 'https://www.credly.com/badges/cec3db88-975b-42ee-974e-2df4e948bfbe',
		skills: ['Business Solutions', 'Citizen Developer','Data Analysis', 'Dataverse','Low Code Application Development','Microsoft Power Platform']
	}
]

function Certifications() {
	return (
		<section id="certifications" className="relative py-16 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
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
					<h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Certifications</h2>
					<p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
						Selected credentials and focus areas
					</p>
				</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{certifications.map((c, index) => (
					<motion.div 
						key={c.title + c.issued} 
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						viewport={{ once: true }}
					className="card-glass card-hover-glow p-5 text-left relative group overflow-hidden"
				>
					{/* Top gradient accent */}
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-cyan-500"></div>
							{/* Gradient overlay on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500"></div>
							
							<div className="relative">
						{/* Badge image, issuer and title in one line */}
						<div className="flex items-center gap-3 mb-3">
							<img 
								src={c.image} 
								alt={c.title}
								className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
							/>
							<div className="flex-1 min-w-0">
								<div className="gradient-text-primary text-xs font-bold mb-0.5">{c.issuer}</div>
							<h3 className="text-base font-bold text-white group-hover:text-primary-400 transition-colors line-clamp-2 mb-1">{c.title}</h3>
							<div className="text-gray-400 text-xs">
								📅 Issued {c.issued}{c.expires ? ` · Expires ${c.expires}` : ''}
							</div>
						</div>
						<a
							href={c.credUrl}
							className="text-gray-400 hover:text-primary-400 transition-all hover:scale-110"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View credential"
						>
							<ExternalLink size={18} />
						</a>
					</div>
				{c.credentialId && (
					<div className="text-xs text-gray-500 mt-2 p-1.5 bg-gray-900/50 rounded-lg break-all">
						Credential ID: {c.credentialId}
					</div>
				)}
				
				{c.skills && c.skills.length > 0 && (
					<div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-800/50">
						{c.skills.map((s) => (
							<span 
								key={s} 
								className="px-2 py-1 bg-gradient-to-r from-gray-800/80 to-gray-900/80 hover:from-primary-900/30 hover:to-accent-900/30 text-gray-300 rounded-lg text-xs font-medium border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
							>
								{s}
							</span>
						))}
					</div>
				)}
			</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Certifications