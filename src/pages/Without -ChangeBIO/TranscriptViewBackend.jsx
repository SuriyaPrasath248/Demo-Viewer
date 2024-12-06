import React from 'react';
import { Header } from './Header';
import { ChatMessage } from './Message';
import styles from './TranscriptViewBackend.module.css';

const messages = [
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus.",
    isResponse: false
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus.",
    isResponse: true,
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/49373aa7473bb65fc49d0670cb42f8fd10a70357851b277c71b6b3e6031623f9?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isResponse: false
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur.",
    isResponse: true,
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/49373aa7473bb65fc49d0670cb42f8fd10a70357851b277c71b6b3e6031623f9?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isResponse: false
  }
];

export function TranscriptViewB() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.transcript}>
        <div className={styles.messageWrapper}>
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              message={msg.message}
              isResponse={msg.isResponse}
              iconSrc={msg.iconSrc}
            />
          ))}
        </div>
      </main>
    </div>
  );
}