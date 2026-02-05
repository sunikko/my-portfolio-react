import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2026 Soy Won. Built with React & Vite.</p>
        <p>
          <a href="https://github.com/sunikko" target="_blank" rel="noopener noreferrer">GitHub</a> •
          {' '}
          <a href="https://soywon.hashnode.dev" target="_blank" rel="noopener noreferrer">Blog</a> •
          {' '}
          <a href="mailto:w.soyeon@gmail.com">Email</a>
        </p>
      </div>
    </footer>
  )
}
