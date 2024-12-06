import React from 'react';
import styles from './UserHistory.module.css';
import { UserCard } from './UserCard';

const userData = [
  { name: "Nevil Shah", credits: 100, rating: 4 },
  { name: "Aadar Malik", credits: 75, rating: 3 },
  { name: "Kautuk bhawsar", credits: 50, rating: 3 },
  { name: "Jainatva Jain", credits: 25, rating: 3 },
  { name: "Kautuk bhawsar", credits: 40, rating: 3 }
];

export const UserHistoryB = () => {
  return (
    <div className={styles.historyContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>User History</h1>
        <button className={styles.settingsButton}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/726878b19cf991b37550f3703feb315b8ddb180af329d6091e1b44fde67138f0?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
            className={styles.settingsIcon}
            alt="Settings"
          />
        </button>
      </header>
      {userData.map((user, index) => (
        <UserCard key={`${user.name}-${index}`} user={user} />
      ))}
    </div>
  );
};