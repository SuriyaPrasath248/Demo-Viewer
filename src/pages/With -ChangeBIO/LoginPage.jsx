import React from 'react';
import styles from './LoginPage.module.css';
import { Logo } from './Logo';
import { Button } from './Button';

export function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.contentWrapper}>
          <Logo />
          <div className={styles.buttonContainer}>
            <Button>Sign in with Google</Button>
            <Button variant="secondary">Sign in with Microsoft</Button>
          </div>
        </div>
      </div>
    </div>
  );
}