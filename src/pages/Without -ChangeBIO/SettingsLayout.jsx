import React from 'react';
import { SettingsHeader } from './SettingsHeader';
import { SettingsContent } from './SettingsContent';
import styles from './Settings.module.css';

export const SettingsLayoutBB = () => {
  return (
    <div className={styles.screenContainer}>
      <SettingsHeader />
      <SettingsContent />
    </div>
  );
};