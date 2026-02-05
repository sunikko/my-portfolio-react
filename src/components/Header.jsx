import React, { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Soy Won</h1>
          <p className={styles.subtitle}>Full Stack Engineer | PHP • Laravel • React</p>
          <div className={styles.contactInfo}>
            <a href="mailto:w.soyeon@gmail.com">📧 w.soyeon@gmail.com</a>
            <a href="https://github.com/sunikko" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            <a href="https://soywon.hashnode.dev" target="_blank" rel="noopener noreferrer">📝 Blog</a>
            <a href="tel:+447526556912">📱 +44 7526 556912</a>
          </div>
        </div>
      </div>
    </header>
  )
}
