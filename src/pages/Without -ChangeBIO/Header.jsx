import React from 'react';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <button className={styles.backButton}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
              className={styles.backIcon}
              alt="Go back"
            />
          </button>
          <div className={styles.userDetails}>
            <div>Jainatva Jain</div>
            <div className={styles.divider} />
            <div>jjainatva@gmail.com</div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.actionLabel}>Other Details</div>
          <button className={styles.actionButton}>View Final J.D.</button>
        </div>
      </div>
    </header>
  );
}