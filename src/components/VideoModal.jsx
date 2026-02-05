import React from 'react'
import styles from '../styles/VideoModal.module.css'

export default function VideoModal({ videoId, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>✕</button>
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Project Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
