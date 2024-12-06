import React from 'react';
import styles from './TranscriptViewBackend.module.css';
import { Message } from './Message';

const messages = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus.",
    isResponse: false
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus.",
    isResponse: true
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isResponse: false
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur.",
    isResponse: true
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isResponse: false
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur.",
    isResponse: true
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isResponse: false
  }
];

export default function TranscriptViewBCB() {
  return (
    <div className={styles.transcriptContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.userInfo}>
            <button className={styles.backButton}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
                className={styles.backIcon}
                alt="Go back"
              />
            </button>
            <div className={styles.userDetails}>
              <span>Jainatva Jain</span>
              <div className={styles.divider} />
              <span>jjainatva@gmail.com</span>
            </div>
          </div>
          <div className={styles.actionSection}>
            <span className={styles.actionLabel}>Other Details</span>
            <button className={styles.actionButton}>View Final J.D.</button>
          </div>
        </div>
      </header>
      <main className={styles.transcriptBody}>
        <div className={styles.messageContainer}>
          {messages.map((message, index) => (
            <Message
              key={index}
              text={message.text}
              isResponse={message.isResponse}
            />
          ))}
        </div>
      </main>
    </div>
  );
}