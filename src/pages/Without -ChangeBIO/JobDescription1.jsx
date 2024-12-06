import React from 'react';
import styles from './Chat1.module.css';

export const JobDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionContent}>
        <h2 className={styles.jobRole}>Job Role</h2>
        <p className={styles.descriptionText}>
          Your J.D. will appear here after you generate job description.
        </p>
      </div>
      <button className={styles.generateButton}>
        Generate Job Description
      </button>
    </div>
  );
};