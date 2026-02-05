Skills.jsx

import React from 'react'
import styles from '../styles/Skills.module.css'

export default function Skills() {
  const skills = [
    {
      icon: '🏗️',
      title: 'Backend Architecture',
      description: 'Design scalable systems with Laravel and PHP',
      highlights: [
        'Class booking system with transactional safety',
        'Implemented transaction-safe booking logic to prevent double reservations',
        'RESTful API design with clear separation of concerns'
      ]
    },
    {
      icon: '⚛️',
      title: 'Frontend Development',
      description: 'Build modern UIs with React and responsive design',
      highlights: [
        'Wedding React App: Component-based architecture with state management',
        'Built full-stack features (frontend + API routes)',
        'Responsive layouts with Flexbox/Grid and CSS modules'
      ]
    },
    {
      icon: '📊',
      title: 'Database Design',
      description: 'Design and model relational data structures',
      highlights: [
        'Designed relational schemas and table relationships in MySQL',
        'Built booking system using Laravel and Eloquent ORM',
        'Managed real-time data sync with external services (Google Sheets)'
      ]
    },
    {
      icon: '🔌',
      title: 'API Integration',
      description: 'Integrate third-party services and build robust APIs',
      highlights: [
        'Stripe payment integration for e-learning platform',
        'BigBlueButton livestream API for automated classroom creation',
        'Google API integration for real-time data sync'
      ]
    },
    {
      icon: '☁️',
      title: 'AWS & Infrastructure',
      description: 'Deploy and manage cloud infrastructure',
      highlights: [
        'EC2, S3, and RDS for scalable applications',
        'Containerized apps using Docker for deployment',
        'Automatic deployments with Vercel (CI/CD)'
      ]
    },
    {
      icon: '🏯',
      title: 'Code Quality',
      description: 'Write maintainable, tested code',
      highlights: [
        'Domain-driven design and clean architecture principles',
        'Automated testing and seeding for data consistency',
        'Code reviews and knowledge sharing with teams'
      ]
    }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Core Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.header}>
                <span className={styles.icon}>{skill.icon}</span>
                <div>
                  <h3 className={styles.skillTitle}>{skill.title}</h3>
                  <p className={styles.skillDesc}>{skill.description}</p>
                </div>
              </div>
              <ul className={styles.highlights}>
                {skill.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
