import React, { useState } from 'react';
import styles from './OtherDetails.module.css';

const OtherDetailsBCB = () => {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState('');

  const sharedEmails = [
    'vaibhav123@gmail.com',
    'amansingh123@gmail.com',
    'rajpalyadav@gmail.com',
    'samkishajaiswal123@gmail.com'
  ];

  const viewedEmails = [
    'amansingh123@gmail.com',
    'vaibhav123@gmail.com',
    'samkishajaiswal123@gmail.com',
    'rajpalyadav@gmail.com'
  ];

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.userInfo}>
            <button 
              className={styles.backButton}
              aria-label="Go back"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
                className={styles.backIcon}
                alt=""
              />
            </button>
            <div className={styles.userDetails}>
              <span>Jainatva Jain</span>
              <div className={styles.divider} aria-hidden="true" />
              <span>jjainatva@gmail.com</span>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.transcriptButton}>
              View Transcript
            </button>
            <button className={styles.jdButton}>
              View Final J.D.
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.feedbackSection}>
          <form onSubmit={handleSubmit}>
            <div className={styles.feedbackHeader}>
              <div>
                <h1 className={styles.feedbackTitle}>Session feedback</h1>
                <p className={styles.feedbackSubtitle}>
                  Please rate your experience below
                </p>
              </div>
              <div className={styles.ratingContainer}>
                <div className={styles.stars} role="group" aria-label="Rating">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleRating(value)}
                      className={styles.star}
                      aria-label={`Rate ${value} stars`}
                      aria-pressed={rating >= value}
                    >
                      <img
                        src={`http://b.io/ext_${rating >= value ? '2' : '3'}-`}
                        alt=""
                        className={styles.star}
                      />
                    </button>
                  ))}
                </div>
                <span className={styles.ratingText}>
                  {rating}/5 stars
                </span>
              </div>
            </div>

            <div className={styles.feedbackInput}>
              <label htmlFor="feedback" className={styles.inputLabel}>
                Additional feedback
              </label>
              <textarea
                id="feedback"
                className={styles.textarea}
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Share your thoughts..."
                aria-label="Additional feedback"
              />
            </div>
          </form>
        </section>

        <section className={styles.statsSection}>
          <h2 className={styles.statsTitle}>User statistics</h2>
          <div className={styles.statsGrid}>
            <div className={styles.metricsCard}>
              <div className={styles.metric}>
                <div className={styles.metricTitle}>Total Views</div>
                <div className={styles.metricValue}>13</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricTitle}>Number Of Shares</div>
                <div className={styles.metricValue}>05</div>
              </div>
            </div>

            <div className={styles.emailList}>
              <div className={styles.emailListHeader}>
                J.D. shared by-
              </div>
              {sharedEmails.map((email, index) => (
                <div key={`shared-${index}`} className={styles.emailItem}>
                  {email}
                </div>
              ))}
            </div>

            <div className={styles.emailList}>
              <div className={styles.emailListHeader}>
                J.D. viewed by-
              </div>
              {viewedEmails.map((email, index) => (
                <div key={`viewed-${index}`} className={styles.emailItem}>
                  {email}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OtherDetailsBCB;