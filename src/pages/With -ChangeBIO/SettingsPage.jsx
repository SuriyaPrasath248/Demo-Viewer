import React from 'react';
import { UploadSection } from './UploadSection';
import styles from './SettingsPage.module.css';

const uploadSections = [
  { id: 1, title: 'J.D. Rules' },
  { id: 2, title: 'J.D. Interaction' },
  { id: 3, title: 'Miscellenous' }
];

export const SettingsPageBCB = () => {
  return (
    <div className={styles.settingsScreen}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <button className={styles.backButton}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8733f8f5a1036af327c019d83f30f28359b67f8ab0fd74e40b5a7c779381d10?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
              alt="Back"
              className={styles.backIcon}
            />
          </button>
          <h1 className={styles.headerTitle}>Settings</h1>
        </div>
        <div className={styles.settingsIcon}>
          <div className={styles.iconInner} />
        </div>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.textSection}>
          <div className={styles.titleSection}>
            <h2 className={styles.sectionTitle}>Title</h2>
            <div className={styles.titleContent}>
              Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate.
            </div>
          </div>
          
          <div className={styles.introSection}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <div className={styles.introContent}>
              Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida. Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida. Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id
            </div>
          </div>
        </section>

        <section className={styles.uploadSections}>
          <div className={styles.uploadGrid}>
            {uploadSections.map((section) => (
              <UploadSection
                key={section.id}
                title={section.title}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};