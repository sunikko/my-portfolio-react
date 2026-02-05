import React from 'react'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>👋 About Me</h2>
        <div className={styles.content}>
          <p>Full Stack Engineer with commercial experience building scalable web applications. I specialize in backend services with Laravel/PHP while also developing modern frontend experiences with React and Next.js. Passionate about clean code, performance optimization, and delivering real-world impact in collaborative teams.</p>
          <p className={styles.secondPara}>Currently based in London with experience across e-learning platforms, educational tech, and data-driven systems. Experienced with AWS infrastructure and comfortable with AI-assisted development tools.</p>
        </div>
      </div>
    </section>
  )
}
