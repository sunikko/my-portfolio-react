import React, { useEffect, useState } from 'react'
import styles from '../styles/Skills.module.css'

export default function Skills() {
  const skills = [
    { title: 'Backend Architecture', level: 95 },
    { title: 'Frontend Development', level: 85 },
    { title: 'Database Design', level: 90 },
    { title: 'API Development', level: 92 },
    { title: 'AWS Infrastructure', level: 80 },
    { title: 'Code Quality & Testing', level: 88 }
  ]

  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedLevels(skills.map(s => s.level))
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>💡 Core Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.item}>
              <h4>{skill.title}</h4>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${animatedLevels[idx]}%` }}
                />
              </div>
              <span className={styles.level}>
                {animatedLevels[idx] === skill.level ? (
                  skill.level >= 90 ? 'Expert' : skill.level >= 85 ? 'Advanced' : 'Intermediate'
                ) : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
