import React from 'react';
import styles from './Chat.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.backContainer}>
        <button className={styles.backButton} aria-label="Go back">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
            alt=""
            className={styles.backIcon}
          />
        </button>
        <h1 className={styles.title}>Prodigy PB</h1>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d493fe21a6117d466ae61f90b4cf0e6bd26295d5769aed4d516ae9875500c0c8?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
        alt="Company logo"
        className={styles.logo}
      />
    </header>
  );
};