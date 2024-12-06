import React from 'react';
import styles from './Settings.module.css';

export const SettingsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <button 
          className={styles.backButton}
          aria-label="Go back"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
            alt=""
            className={styles.backIcon}
          />
        </button>
        <h1 className={styles.headerTitle}>Settings</h1>
      </div>
      <button 
        className={styles.settingsButton}
        aria-label="Settings menu"
      >
        <div className={styles.settingsIcon} />
      </button>
    </header>
  );
};