import React from 'react';
import styles from './Chat.module.css';

export const JobDescription = () => {
  return (
    <div className={styles.jobDescriptionContainer}>
      <div className={styles.jobContent}>
        <h2 className={styles.jobRole}>Job Role</h2>
        <p className={styles.jobDescription}>
          Your J.D. will appear here after you generate job description.
        </p>
      </div>
      <button className={styles.generateButton}>
        Generate Job Description
      </button>
    </div>
  );
};