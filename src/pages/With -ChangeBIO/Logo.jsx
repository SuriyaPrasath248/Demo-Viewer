import React from 'react';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b321bebd7e6d9ce67f883b6b92905c17500ab6d4501a25222f45b5ca1525f509?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
          className={styles.logoImage}
          alt="Prodigy PB Logo"
        />
      </div>
      <div className={styles.logoText}>Prodigy PB</div>
    </div>
  );
}