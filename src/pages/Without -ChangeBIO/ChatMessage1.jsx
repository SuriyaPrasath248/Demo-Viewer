import React from 'react';
import styles from './Chat1.module.css';

export const ChatMessage = ({ message, isUser, timestamp }) => {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.avatarCircle} />
      <div className={styles.messageContent}>
        {message}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/49373aa7473bb65fc49d0670cb42f8fd10a70357851b277c71b6b3e6031623f9?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
        alt=""
        className={styles.messageIcon}
      />
    </div>
  );
};