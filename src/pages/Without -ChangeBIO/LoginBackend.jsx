import React, { useState } from 'react';
import styles from './LoginBackend.module.css';

export function PasswordLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError('Password is required');
      return;
    }
    if (password.length < 8) {
      setError('Invalid Password, Please try again');
      return;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.logoWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b1205c9d935a6df07e94c06572bffecbd695206f18ac49530b4cfbb6ca38f67?placeholderIfAbsent=true&apiKey=baa6e89bda9a4d01aa8b8cdfd3e9d328"
            className={styles.logoImage}
            alt="Prodigy PB Logo"
          />
          <div className={styles.logoText}>Prodigy PB</div>
        </div>
        
        <form className={styles.formSection} onSubmit={handleSubmit}>
          <label htmlFor="password" className={styles.passwordLabel}>
            Password
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="password"
              type="password"
              className={styles.passwordInput}
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              aria-label="Password input"
              aria-invalid={!!error}
              aria-describedby={error ? "password-error" : undefined}
            />
            {error && (
              <div 
                id="password-error" 
                className={styles.errorMessage} 
                role="alert"
              >
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}