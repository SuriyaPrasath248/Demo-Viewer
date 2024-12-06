import React from 'react';
import styles from './FeedbackLayout.module.css';
import FeedbackForm from './components/FeedbackForm';
import UserStats from './components/UserStats';

export default function FeedbackLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <button className={styles.backButton} aria-label="Go back">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
              className={styles.backIcon}
              alt=""
            />
          </button>
          <div className={styles.userInfo}>
            <span>Jainatva Jain</span>
            <div className={styles.divider} />
            <span>jjainatva@gmail.com</span>
          </div>
          <div className={styles.actionButtons}>
            <div className={styles.buttonGroup}>
              <button className={styles.viewTranscript}>View Transcript</button>
              <button className={styles.viewFinal}>View Final J.D.</button>
            </div>
          </div>
        </div>
      </header>

      <FeedbackForm />
      <UserStats />
    </div>
  );
}