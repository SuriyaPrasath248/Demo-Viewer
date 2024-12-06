import React from 'react';
import styles from './AuthButton.module.css';

export const AuthButton = ({ children, variant = 'primary', onClick }) => {
  return (
    <button 
      className={`${styles.authButton} ${styles[variant]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};