import * as React from "react";
import styles from './JobDescriptionPage.module.css';


const RESPONSIBILITIES = [
  "carrying out market research in order to keep up to date with customer trends, as well as trying to predict future trends",
  "developing strategies and managing marketing campaigns across print, broadcast and online platforms to ensure that products and services meet customers' expectations and to build the credibility of brands",
  "analysing the success of marketing campaigns and creating reports",
  "supervising advertising, product design and other forms of marketing to maintain consistency in branding",
  "meeting with clients and working with colleagues across multiple departments (such as marketing assistants, marketing managers and chief marketing officers)",
  "managing budgets and a team of junior assistants",
  "organising events such as product launches, exhibitions and photo shoots."
];

export default function JobDescriptionPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Brand Manager - Job Description</h1>
        <div className={styles.actionButtons}>
          <button className={styles.shareButton}>
            <span>Share</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/961ac42344af23eb8608bb5b45d4b65a519109e04a767d7af614f297549ba845?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
              className={styles.shareIcon}
              alt=""
            />
          </button>
          <button className={styles.createButton}>Create New</button>
        </div>
      </header>
      <div className={styles.description}>
        {RESPONSIBILITIES.map((responsibility, index) => (
          <React.Fragment key={index}>
            {responsibility}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}