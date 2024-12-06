import React from 'react';
import { UserCard } from './UserCard';
import styles from './UserHistory.module.css';

const users = [
  { name: 'Nevil Shah', rating: 4 },
  { name: 'Aadar Malik', rating: 3 },
  { name: 'Kautuk bhawsar', rating: 3 },
  { name: 'Jainatva Jain', rating: 3 },
  { name: 'Kautuk bhawsar', rating: 3 }
];

export const UserHistory = () => {
  return (
    <div className={styles.userHistoryScreen}>
      <header className={styles.header}>
        <h1 className={styles.title}>User History</h1>
        <button className={styles.settingsButton}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/726878b19cf991b37550f3703feb315b8ddb180af329d6091e1b44fde67138f0?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
            alt="Settings"
            className={styles.settingsIcon}
          />
        </button>
      </header>
      
      <div className={styles.userList}>
        {users.map((user, index) => (
          <UserCard
            key={`${user.name}-${index}`}
            name={user.name}
            rating={user.rating}
            onViewTranscript={() => {}}
            onViewJD={() => {}}
          />
        ))}
      </div>
    </div>
  );
};