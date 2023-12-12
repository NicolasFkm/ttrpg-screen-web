import React from 'react';
import styles from './NameLabel.module.css';

export function NameLabel({ name }: { name: string }) {
  return (
    <div className={styles.label}>
      <p>{name}</p>
    </div>
  );
}
