import React from 'react'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <p>Backend-focused Full Stack Engineer with commercial experience building scalable web applications using Laravel and PHP. </p>
          <p className={styles.secondPara}>I design reliable backend systems first — APIs, database architecture, and transactional logic — then craft modern user experiences.
I enjoy solving real-world problems through practical engineering. I’m comfortable working with AWS deployments and AI integrations.</p>
        </div>
      </div>
    </section>
  )
}
