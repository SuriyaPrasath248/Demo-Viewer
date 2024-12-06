import React, { useState } from 'react';
import styles from './OtherDetails.module.css';

export const OtherDetailsBB = () => {
  const [feedback, setFeedback] = useState('');
  
  const sharedByUsers = [
    'vaibhav123@gmail.com',
    'amansingh123@gmail.com', 
    'rajpalyadav@gmail.com',
    'samkishajaiswal123@gmail.com'
  ];

  const viewedByUsers = [
    'amansingh123@gmail.com',
    'vaibhav123@gmail.com',
    'samkishajaiswal123@gmail.com', 
    'rajpalyadav@gmail.com'
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className={styles.feedbackContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.userInfo}>
            <button 
              onClick={handleBackClick}
              className={styles.backButton}
              aria-label="Go back"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
                alt=""
                className={styles.backIcon}
              />
            </button>
            <div className={styles.userDetails}>
              <span>Jainatva Jain</span>
              <div className={styles.divider} aria-hidden="true" />
              <span>jjainatva@gmail.com</span>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.viewTranscript}>View Transcript</button>
            <button className={styles.viewFinal}>View Final J.D.</button>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.feedbackSection} aria-labelledby="feedbackTitle">
          <div className={styles.feedbackHeader}>
            <div className={styles.feedbackTitle}>
              <h1 id="feedbackTitle" className={styles.title}>Session feedback</h1>
              <p className={styles.subtitle}>Please rate your experience below</p>
            </div>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.ratingContainer}>
              <div className={styles.starRating} role="img" aria-label="Rating: 4 out of 5 stars">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2a2c00c16804f1a92f6536e7d2d374b11e7d7549cbac3b26172b54953540f22?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
                    alt=""
                    className={styles.star}
                  />
                ))}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/44b049b289da4196ea0f21c9d9f6aeae429be6952a85c128713a2dd67fc8a81a?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
                  alt=""
                  className={styles.star}
                />
              </div>
              <span className={styles.ratingText}>4/5 stars</span>
            </div>
          </div>

          <form className={styles.feedbackInput}>
            <label htmlFor="feedback" className={styles.feedbackLabel}>
              Additional feedback
            </label>
            <textarea
              id="feedback"
              className={styles.textArea}
              value={feedback}
              onChange={handleFeedbackChange}
              aria-label="Additional feedback"
            />
          </form>
        </section>

        <h2 className={styles.statsTitle}>User statistics</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statCardContent}>
              <div className={styles.statLabel}>Total Views</div>
              <div className={styles.statValue}>13</div>
            </div>
            <div className={styles.statCardContent}>
              <div className={styles.statLabel}>Number Of Shares</div>
              <div className={styles.statValue}>05</div>
            </div>
          </div>
          
          <div className={styles.userList}>
            <div className={styles.listHeader}>J.D. shared by-</div>
            {sharedByUsers.map((email, index) => (
              <div key={`shared-${index}`} className={styles.listItem}>
                {email}
              </div>
            ))}
          </div>

          <div className={styles.userList}>
            <div className={styles.listHeader}>J.D. viewed by-</div>
            {viewedByUsers.map((email, index) => (
              <div key={`viewed-${index}`} className={styles.listItem}>
                {email}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};