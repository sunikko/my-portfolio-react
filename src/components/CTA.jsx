import React from 'react'
import styles from '../styles/CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Let's Build Something Great</h3>
          <p>I'm actively looking for opportunities with teams that value clean code, collaboration, and making real impact.</p>
          <a href="mailto:w.soyeon@gmail.com" className={styles.button}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
