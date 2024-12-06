import React from 'react';
import styles from './Chat.module.css';

export const ChatInput = () => {
  return (
    <div className={styles.chatBar}>
      <form className={styles.inputContainer}>
        <label htmlFor="chatInput" className="visually-hidden">
          What should your J.D. look like? Tell us
        </label>
        <div className={styles.fieldText}>
          <input
            type="text"
            id="chatInput"
            className={styles.fieldText2}
            placeholder="What should your J.D. look like? Tell us"
          />
          <div className={styles.attachAndSend}>
            <button type="button" aria-label="Attach file">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1861ae5f58a4eea62f59ff170463e93b2b9baac6cc4f1d31d24b9cf312a8f47e?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
                alt=""
                className={styles.attachIcon}
              />
            </button>
            <button type="submit" aria-label="Send message">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b027f3f74ec8a074d9df1cf48106516e18dcc919c21231119793f71ef79c69f8?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
                alt=""
                className={styles.sendIcon}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};