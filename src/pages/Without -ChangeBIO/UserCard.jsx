import React from 'react';
import styles from './UserCard.module.css';

export const UserCard = ({ user }) => {
  const { name, credits, rating } = user;
  
  const renderStars = () => {
    return Array(5).fill(0).map((_, index) => (
      <img
        key={index}
        loading="lazy"
        src={`http://b.io/ext_${index < rating ? '2' : '3'}-`}
        className={styles.starIcon}
        alt={index < rating ? "Filled star" : "Empty star"}
      />
    ));
  };

  return (
    <div className={styles.userCard}>
      <div className={styles.cardContent}>
        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <div className={styles.userName}>{name}</div>
            <div className={styles.divider} />
            <div className={styles.creditsContainer}>
              <div className={styles.creditsLabel}>Credits Remaining - {credits}</div>
            </div>
          </div>
        </div>
        <div className={styles.ratingSection}>
          <div className={styles.ratingContainer}>
            <div className={styles.ratingLabel}>Avg Rating - {rating}/5</div>
            <div className={styles.starRating}>
              {renderStars()}
            </div>
            <div className={styles.actionButtons}>
              <div className={styles.actionLabel}>Other Details</div>
              <div className={styles.buttonGroup}>
                <button className={styles.transcriptButton}>View Transcript</button>
                <button className={styles.jdButton}>View Final J.D.</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};