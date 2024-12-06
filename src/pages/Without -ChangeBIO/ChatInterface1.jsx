import React from 'react';
import { Header } from './Header1';
import { ChatMessage } from './ChatMessage1';
import { ChatInput } from './ChatInput1';
import { JobDescription } from './JobDescription1';
import styles from './Chat1.module.css';

const messages = [
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus.",
    isUser: true
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus.",
    isUser: false
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isUser: true
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur.",
    isUser: false
  },
  {
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isUser: true
  }
];

export const ChatInterface = () => {
  return (
    <div className={styles.chatScreen}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.chatContainer}>
          <div className={styles.messageList}>
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.message}
                isUser={msg.isUser}
              />
            ))}
          </div>
          <ChatInput />
        </div>
        <JobDescription />
      </div>
    </div>
  );
};