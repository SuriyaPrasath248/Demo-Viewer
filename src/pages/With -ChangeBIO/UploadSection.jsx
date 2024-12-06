import React from 'react';
import styles from './UploadSection.module.css';

export const UploadSection = ({ title, onUpload }) => {
  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContent}>
        <h3 className={styles.uploadTitle}>{title}</h3>
        <div className={styles.uploadBox}>
          <div className={styles.uploadButton}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/127c1e970838a9b5119a6f9ce0b136e29dc8864a75d07f2d84b0886558d8130e?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
              alt="Upload icon"
              className={styles.uploadIcon}
            />
            <span>Upload File</span>
          </div>
        </div>
      </div>
      <p className={styles.uploadLimits}>
        Maximum combined file size 50 MB • Only zip, pdf, doc, ppt, xls, png, jpg, mp3, mp4 allowed
      </p>
    </div>
  );
};