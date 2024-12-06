import * as React from "react";
import styles from './IntroductionLayout1.module.css';

export default function IntroductionLayout() {
  const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.",
    "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.",
    "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.",
    "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.",
    "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida.",
    "Lorem ipsum dolor sit amet consectetur. Nisi volutpat pharetra vulputate vulputate. At nulla nec turpis luctus ornare tellus. Molestie vitae mauris a ultrices eget cursus id. Id vulputate donec eros risus enim lectus leo posuere gravida."
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
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
        <div className={styles.actionWrapper}>
          <button 
            className={styles.proceedButton}
            onClick={() => {}}
            tabIndex={0}
          >
            Proceed
          </button>
          <span className={styles.creditsText}>(3 Credits Left)</span>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b36ee62fe21621b2610e07a30bbb4048ce2989a19ad5646b92071ea2daf2e6e?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
        className={styles.sideImage}
        alt="Introduction visual content"
      />
    </div>
  );
}