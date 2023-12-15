import { ReactNode } from 'react';
import Ribbon from 'antd/lib/badge/Ribbon';
import styles from './StatIcon.module.css';
import { HeartTwoTone } from '@ant-design/icons';

export default function StatIcon({
  color,
  icon,
  total,
  current,
}: {
  color: string;
  icon: ReactNode;
  total: number;
  current: number;
}) {
  return (
    <div className={styles.stat}>
      {/* <Ribbon
        placement='start'
        className={styles.ribbon}
        color={color}
        text={total}
      > */}
      <div className={`${styles.content} ${color}`}>
        {icon} {current} <sup>/{total}</sup>
      </div>
      {/* </Ribbon> */}
    </div>
  );
}
