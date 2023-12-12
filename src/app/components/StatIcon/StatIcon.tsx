import { Avatar, Badge, Image } from 'antd';
import styles from './StatIcon.module.css';

export default function StatIcon({
  color,
  src,
}: {
  color: string;
  src: string;
}) {
  return (
    <div>
      <Badge color={color} count={5} size='default'>
        <Avatar src={src} size={75}></Avatar>
        <p className={styles.content}>213</p>
      </Badge>
    </div>
  );
}
