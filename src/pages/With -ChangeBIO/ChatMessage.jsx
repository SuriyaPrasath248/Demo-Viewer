import React from 'react';
import styles from './Chat.module.css';

export const ChatMessage = ({ avatar, message, isUser }) => {
  return (
    <div className={styles.messageContainer}>
      <img
        loading="lazy"
        src={avatar}
        alt={isUser ? "User avatar" : "Assistant avatar"}
        className={styles.avatar}
      />
      <div className={`${styles.message} ${isUser ? styles.userMessage : ''}`}>
        {message}
      </div>
    </div>
  );
};