import React from 'react';
import { TextSection } from './TextSection';
import { UploadSection } from './UploadSection';
import styles from './Settings.module.css';

export const SettingsContent = () => {
  const uploadSections = [
    { title: 'J.D. Rules' },
    { title: 'J.D. Interaction' },
    { title: 'Miscellenous' }
  ];

  return (
    <main className={styles.mainContent}>
      <TextSection
        title="Title"
        content="Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate."
        isCompact
      />
      <TextSection
        title="Introduction"
        content="Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida. Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida. Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id"
      />
      <section className={styles.uploadsSection}>
        <div className={styles.uploadGrid}>
          {uploadSections.map((section, index) => (
            <UploadSection 
              key={`upload-section-${index}`}
              title={section.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
};