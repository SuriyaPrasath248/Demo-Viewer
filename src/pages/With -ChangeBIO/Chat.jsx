import React from 'react';
import { Header } from './Header';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { JobDescription } from './JobDescriptionpop';
import styles from './Chat.module.css';

const chatMessages = [
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb19374d178588a66e5d75f4d563e04747fea3767cf802ade9628cd382fb5785?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328",
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus.",
    isUser: false
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edf7589da186c23969cc1d141aee816cac6788cb28259fcda7e2640820f1545?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328",
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isUser: true
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6edf7589da186c23969cc1d141aee816cac6788cb28259fcda7e2640820f1545?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328",
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isUser: false
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/e078f3f5fbf46964837d01e201b3fdc172c96931010565acdba8e31e13636ee9?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328",
    message: "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate",
    isUser: true
  }
];

export const Chat = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.spacer} />
        <div className={styles.contentWrapper}>
          <section className={styles.chatSection}>
            <div className={styles.messageList}>
              {chatMessages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  avatar={msg.avatar}
                  message={msg.message}
                  isUser={msg.isUser}
                />
              ))}
            </div>
            <ChatInput />
          </section>
          <JobDescription />
        </div>
      </main>
    </div>
  );
};