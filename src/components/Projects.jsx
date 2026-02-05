import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/Projects.module.css'

export default function Projects() {
  const projects = [
    {
      icon: '📅',
      title: 'Class Booking System',
      subtitle: 'Laravel Backend Architecture | Solo Project',
      description: 'Built a transaction-safe booking system to practice Laravel best practices and prevent race conditions in concurrent bookings.',
      tech: ['Laravel', 'PHP 8', 'MySQL', 'REST APIs'],
      links: [
        { label: 'GitHub', url: 'https://github.com/sunikko/class-booking-system' },
        { label: 'Blog Post', url: 'https://soywon.hashnode.dev' }
      ]
    },
    {
      icon: '⚛️',
      title: 'Wedding React App',
      subtitle: 'Modern React Application | Solo Project',
      description: 'A responsive wedding planning application built with React showcasing component architecture, state management, and modern UI/UX patterns.',
      tech: ['React', 'JavaScript', 'Responsive Design', 'Component-based'],
      links: [
        { label: 'Live Demo', url: 'https://wedding-react-app.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/sunikko/wedding-react-app' }
      ]
    },
    {
      icon: '📱',
      title: 'AI Recording Web App',
      subtitle: 'Web Audio & AI Integration | Solo Project',
      description: 'Browser-based voice recording app built with Next.js. Records audio using the MediaRecorder API and integrates with OpenAI for speech-to-text and summarization.',
      tech: ['Next.js', 'React', 'MediaRecorder API', 'OpenAI API (integration prepared)'],
      links: [
        { label: 'Live Demo', url: 'https://ai-recording-web.vercel.app/' },
        { label: 'GitHub', url: 'https://github.com/sunikko/ai-recording-web' }
      ]
    },
    {
      icon: '🎓',
      title: 'E-Learning Platform',
      subtitle: 'Commercial Project / Backend Engineer @ OxBridge Centre',
      description: 'Integrated Stripe payment gateway for subscription management  • Designed Django REST APIs serving React frontend  • Deployed on AWS EC2 with RDS database',
      tech: ['Django', 'Python', 'Stripe API', 'AWS'],
      videoId: '3rk_n5tsVKM'
    },
    
    {
      icon: '📺',
      title: 'Livestream Platform',
      subtitle: 'Real-time Integration / Backend Engineer @ OxBridge Centre',
      description: 'Automated livestream room creation with BigBlueButton API integration for tutoring platform with real-time attendance tracking.',
      tech: ['PHP', 'BigBlueButton API', 'Scheduler', 'MySQL'],
      videoId: '5GB6coclB1k'
    },
    {
      icon: '📊',
      title: 'Test Report System',
      subtitle: 'Data Visualization / Backend Engineer @ OxBridge Centre',
      description: 'Automated report generation system with interactive data visualization using Chart.js for educational assessments.',
      tech: ['PHP', 'JavaScript', 'Chart.js', 'MySQL'],
      videoId: 'DIyMc7EP7jo'
    }
    
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
