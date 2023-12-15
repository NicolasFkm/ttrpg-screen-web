import React from 'react';
import styles from './NameLabel.module.css';

export function NameLabel({
  name,
  classDesc,
  level,
}: {
  name: string;
  classDesc: string;
  level: string;
}) {
  return (
    <>
      <div className={styles.label}>
        <span>{name}</span>
      </div>
      <div className={styles.class}>
        <span>
          {classDesc} {level}
        </span>
      </div>
    </>
  );
}
