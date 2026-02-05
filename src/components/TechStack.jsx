import React from 'react'
import styles from '../styles/TechStack.module.css'

export default function TechStack() {
  const categories = [
    {
      title: 'Backend',
      tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Python', 'Django']
    },
    {
      title: 'Frontend',
      tags: ['React', 'Next.js', 'JavaScript', 'HTML/CSS', 'Bootstrap']
    },
    {
      title: 'Infrastructure',
      tags: ['AWS', 'Git', 'CI/CD']
    }
  ]

  return (
    <section id="tech" className={styles.tech}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tech Stack</h2>
        <div className={styles.grid}>
          {categories.map((cat, idx) => (
            <div key={idx} className={styles.category}>
              <h4 className={styles.categoryTitle}>{cat.title}</h4>
              <div className={styles.tags}>
                {cat.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
