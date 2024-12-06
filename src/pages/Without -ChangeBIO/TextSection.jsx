import React from 'react';
import styles from './Settings.module.css';

export const TextSection = ({ title, content, isCompact }) => {
  return (
    <section className={isCompact ? styles.titleSection : styles.introSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={isCompact ? styles.textField : styles.textArea}>
        {content}
      </div>
    </section>
  );
};