import React, { useState } from 'react'
import VideoModal from './VideoModal'
import styles from '../styles/ProjectCard.module.css'

export default function ProjectCard({ icon, title, subtitle, description, tech, videoId, links }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.icon}>{icon}</div>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
        <div className={styles.body}>
          <p>{description}</p>
          <div className={styles.tech}>
            {tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
          <div className={styles.links}>
            {videoId && (
              <button
                className={styles.link}
                onClick={() => setShowModal(true)}
              >
                → Demo Video
              </button>
            )}
            {links?.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {videoId && <VideoModal videoId={videoId} isOpen={showModal} onClose={() => setShowModal(false)} />}
    </>
  )
}
