import React from 'react';
import styles from './UserCard.module.css';

export const UserCard = ({ 
  name, 
  rating, 
  hasTranscript = true,
  onViewTranscript,
  onViewJD 
}) => {
  const stars = Array(5).fill(null).map((_, index) => (
    <img
      key={index}
      loading="lazy"
      src={`http://b.io/ext_${index < rating ? '2' : '3'}-`}
      alt={index < rating ? "Filled star" : "Empty star"}
      className={styles.starIcon}
    />
  ));

  return (
    <div className={styles.userCard}>
      <div className={styles.cardContent}>
        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <div className={styles.userName}>{name}</div>
            <div className={styles.divider} />
            <div className={styles.credits}>
              <span>Credits Remaining - </span>
              <div className={styles.creditIcon} role="img" aria-label="Credit indicator" />
            </div>
          </div>
        </div>
        
        <div className={styles.ratingSection}>
          <div className={styles.ratingContainer}>
            <div className={styles.ratingText}>Avg Rating - {rating}/5</div>
            <div className={styles.starRating} role="img" aria-label={`${rating} out of 5 stars`}>
              {stars}
            </div>
            <div className={styles.actions}>
              <div className={styles.actionLabel}>Other Details</div>
              <div className={styles.buttonGroup}>
                {hasTranscript && (
                  <button 
                    className={styles.viewTranscript}
                    onClick={onViewTranscript}
                  >
                    View Transcript
                  </button>
                )}
                <button 
                  className={styles.viewJD}
                  onClick={onViewJD}
                >
                  View Final J.D.
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};