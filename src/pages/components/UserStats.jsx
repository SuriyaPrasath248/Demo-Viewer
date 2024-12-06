import React from 'react';
import styles from './UserStats.module.css';

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

export default function UserStats() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User statistics</h2>
      <div className={styles.statsGrid}>
        <div className={styles.metricsContainer}>
          <div className={styles.metric}>
            <h3 className={styles.metricTitle}>Total Views</h3>
            <div className={styles.metricValue}>13</div>
          </div>
          <div className={`${styles.metric} ${styles.sharesMetric}`}>
            <h3 className={styles.metricTitle}>Number Of Shares</h3>
            <div className={styles.metricValue}>05</div>
          </div>
        </div>

        <div className={styles.userList}>
          <div className={styles.listHeader}>J.D. shared by- </div>
          {sharedEmails.map((email, index) => (
            <div key={`shared-${index}`} className={styles.listItem}>
              {email}
            </div>
          ))}
        </div>

        <div className={styles.userList}>
          <div className={styles.listHeader}>J.D. viewed by- </div>
          {viewedEmails.map((email, index) => (
            <div key={`viewed-${index}`} className={styles.listItem}>
              {email}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}