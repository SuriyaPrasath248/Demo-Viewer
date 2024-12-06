import React from 'react';
import styles from './FeedbackForm.module.css';

export default function FeedbackForm() {
  const stars = Array(5).fill(null).map((_, i) => (
    <img
      key={i}
      loading="lazy"
      src={`http://b.io/ext_${i < 4 ? '2' : '3'}-`}
      className={styles.star}
      alt={i < 4 ? "Filled star" : "Empty star"}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>Session feedback</h2>
          <p className={styles.subtitle}>Please rate your experience below</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.ratingContainer}>
          <div className={styles.starRating}>
            {stars}
          </div>
          <span className={styles.ratingText}>4/5 stars</span>
        </div>
      </div>
      
      <form className={styles.feedbackInput}>
        <label htmlFor="feedback" className={styles.inputLabel}>Additional feedback</label>
        <textarea
          id="feedback"
          className={styles.textarea}
          aria-label="Additional feedback"
          defaultValue="Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida."
        />
      </form>
    </div>
  );
}