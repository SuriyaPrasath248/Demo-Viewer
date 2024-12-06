import React from 'react';
import styles from './Settings.module.css';

export const UploadSection = ({ title }) => {
  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.zip,.pdf,.doc,.ppt,.xls,.png,.jpg,.mp3,.mp4';
    input.multiple = true;
    input.click();
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.uploadContent}>
        <div className={styles.sectionTitle}>{title}</div>
        <div 
          className={styles.uploadBox}
          onClick={handleUpload}
          onKeyDown={(e) => e.key === 'Enter' && handleUpload()}
          role="button"
          tabIndex={0}
          aria-label={`Upload files for ${title}`}
        >
          <div className={styles.uploadButton}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e49829ef6cb9c4200d39f7744a674ec2454d151d0d01059e40dc02850a79bc91?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
              alt=""
              className={styles.uploadIcon}
            />
            <div>Upload File</div>
          </div>
        </div>
      </div>
      <div className={styles.uploadLimits}>
        Maximum combined file size 50 MB • Only zip, pdf, doc, ppt, xls, png, jpg, mp3, mp4 allowed
      </div>
    </div>
  );
};