import React from 'react';
import styles from './Message.module.css';

export function ChatMessage({ message, isResponse, iconSrc }) {
  return (
    <>
      <div className={styles.messageContainer}>
        <div className={styles.avatar} />
        <div className={styles.messageText}>{message}</div>
      </div>
      {isResponse && (
        <>
          <img
            loading="lazy"
            src={iconSrc}
            className={styles.responseIcon}
            alt=""
          />
          <div className={styles.responseMessage}>{message}</div>
        </>
      )}
    </>
  );
}