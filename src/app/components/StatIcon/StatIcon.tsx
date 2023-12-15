import { Avatar } from 'antd';
import Ribbon from 'antd/lib/badge/Ribbon';
import styles from './StatIcon.module.css';

export default function StatIcon({
  color,
  src,
  total,
  current,
}: {
  color: string;
  src: string;
  total: number;
  current: number;
}) {
  return (
    <div className={styles.stat}>
      <Ribbon
        placement='start'
        className={styles.ribbon}
        color={color}
        text={total}
      >
        <Avatar className={styles.icon} src={src} size={45}></Avatar>
        <p className={`${styles.content} ${color}`}>{current}</p>
      </Ribbon>
    </div>
  );
}
