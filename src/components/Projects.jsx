import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../styles/Projects.module.css'

export default function Projects() {
  const projects = [
    {
      icon: '⚛️',
      title: 'Wedding React App',
      subtitle: 'Modern React Application',
      description: 'A responsive wedding planning application built with React showcasing component architecture, state management, and modern UI/UX patterns.',
      tech: ['React', 'JavaScript', 'Responsive Design', 'Component-based'],
      links: [
        { label: 'Live Demo', url: 'https://wedding-react-app.vercel.app/' },
        { label: 'GitHub', url: '#' }
      ]
    },
    {
      icon: '🎓',
      title: 'Online Lecture Platform',
      subtitle: 'Full Stack Development',
      description: 'A comprehensive e-learning platform with Django backend, React frontend, and integrated payment system for course enrollment.',
      tech: ['Django', 'Python', 'Stripe API', 'AWS'],
      videoId: '3rk_n5tsVKM',
      links: [
        { label: 'GitHub', url: '#' }
      ]
    },
    {
      icon: '📅',
      title: 'Class Booking System',
      subtitle: 'Laravel Backend Architecture',
      description: 'Robust booking system with domain-driven design, transaction safety, and row-level locking to prevent double bookings.',
      tech: ['Laravel', 'PHP 8', 'MySQL', 'DDD'],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Blog Post', url: 'https://soywon.hashnode.dev' }
      ]
    },
    {
      icon: '📺',
      title: 'Livestream Platform',
      subtitle: 'Real-time Integration',
      description: 'Automated livestream room creation with BigBlueButton API integration for tutoring platform with real-time attendance tracking.',
      tech: ['PHP', 'BigBlueButton API', 'Scheduler', 'MySQL'],
      videoId: '5GB6coclB1k'
    },
    {
      icon: '📊',
      title: 'Test Report System',
      subtitle: 'Data Visualization',
      description: 'Automated report generation system with interactive data visualization using Chart.js for educational assessments.',
      tech: ['PHP', 'JavaScript', 'Chart.js', 'MySQL'],
      videoId: 'DIyMc7EP7jo'
    },
    {
      icon: '📱',
      title: 'React Native Mobile App',
      subtitle: 'Cross-platform Development',
      description: 'Cross-platform mobile application built with React Native and Expo featuring shared business logic and API integration.',
      tech: ['React Native', 'Expo', 'JavaScript'],
      links: [
        { label: 'GitHub', url: '#' }
      ]
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
