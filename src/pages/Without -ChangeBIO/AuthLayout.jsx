import React from 'react';
import { AuthButton } from './AuthButton';
import styles from './AuthLayout.module.css';

export const AuthLayout = () => {
  const handleGoogleSignIn = () => {
    // Handle Google sign in
  };

  const handleMicrosoftSignIn = () => {
    // Handle Microsoft sign in
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.logoContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7de68d972d0d56d8f37f19e1e1df35112bc5023d0a3c26074efafb4eef973ff?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
            className={styles.logoImage}
            alt="Prodigy PB Logo"
          />
          <div className={styles.brandName}>Prodigy PB</div>
        </div>
        <div className={styles.authButtonsContainer}>
          <AuthButton onClick={handleGoogleSignIn}>
            Sign in with Google
          </AuthButton>
          <AuthButton 
            variant="secondary" 
            onClick={handleMicrosoftSignIn}
          >
            Sign in with Microsoft
          </AuthButton>
        </div>
      </div>
    </div>
  );
};