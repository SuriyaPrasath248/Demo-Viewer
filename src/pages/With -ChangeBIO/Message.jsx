import React from 'react';
import styles from './TranscriptViewBackend.module.css';

export const Message = ({ text, isResponse = false, showAvatar = true }) => {
  if (isResponse) {
    return (
      <div className={styles.responseContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/49373aa7473bb65fc49d0670cb42f8fd10a70357851b277c71b6b3e6031623f9?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
          className={styles.responseIcon}
          alt=""
        />
        <div className={styles.responseText}>
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.messageWrapper}>
      {showAvatar && <div className={styles.avatar} />}
      <div className={styles.messageText}>
        {text}
      </div>
    </div>
  );
};