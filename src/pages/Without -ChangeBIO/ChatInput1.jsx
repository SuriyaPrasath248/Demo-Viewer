import React from 'react';
import styles from './Chat1.module.css';

export const ChatInput = () => {
  return (
    <form className={styles.inputContainer}>
      <label htmlFor="chatInput" className={styles.visuallyHidden}>
        Enter your message
      </label>
      <div className={styles.inputField}>
        <input
          type="text"
          id="chatInput"
          className={styles.textInput}
          placeholder="What should your J.D. look like? Tell us"
          aria-label="Chat input field"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5d5d4b82f92d3e0527f780605f7d4803d8eeca7efb705b514833f36d424b982?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
          alt=""
          className={styles.sendIcon}
        />
      </div>
    </form>
  );
};