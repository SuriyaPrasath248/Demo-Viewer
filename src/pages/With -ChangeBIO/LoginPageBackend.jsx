import * as React from "react";
import styles from './LoginPageBackend.module.css';

export default function LoginForm() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.logoContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39cf433a1a2eb48d16806335bc2a9bda45c5f21a4df5276dc4636e2aea46cbba?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
            className={styles.logoImage}
            alt="Prodigy PB Logo"
          />
          <div className={styles.brandName}>Prodigy PB</div>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="passwordInput" className={styles.passwordLabel}>
              Password
            </label>
            <input
              type="password"
              id="passwordInput"
              className={styles.passwordInput}
              placeholder="Enter your password"
              aria-label="Enter your password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}