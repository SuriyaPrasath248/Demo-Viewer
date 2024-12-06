import React from 'react';
import styles from './Chat1.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.backButton}>
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
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44e641fc35ec6d326412daa204942dc535f0e0111b8233f72a7e23b19efe404?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
        alt="Company Logo"
        className={styles.logo}
      />
    </header>
  );
};