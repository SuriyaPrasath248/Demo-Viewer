import React from 'react';
import styles from './IntroductionSection.module.css';

export default function IntroductionSection() {
  const paragraphs = [
    `Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.`,
    `Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.`,
    `Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.`,
    `Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.`,
    `Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.`,
    `Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.`
  ];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Introduction-</h1>
          <div className={styles.description}>
            {paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles.actionContainer}>
          <button 
            className={styles.proceedButton}
            onClick={() => {}}
            tabIndex={0}
            aria-label="Proceed with action"
          >
            Proceed
          </button>
          <div className={styles.credits} aria-label="Credits remaining">(3 Credits Left)</div>
        </div>
      </div>
      <div className={styles.visualContent} role="presentation" />
    </section>
  );
}