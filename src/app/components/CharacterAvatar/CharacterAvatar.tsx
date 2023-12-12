import { Avatar, Badge, Image } from 'antd';
import { NameLabel } from '../NameLabel/NameLabel';
import styles from './CharacterAvatar.module.css';

export default function CharacterAvatar({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) {
  return (
    <div className={styles.avatarSection}>
      <Avatar
        className={styles.avatarCircle}
        size={200}
        src={imageSrc}
      ></Avatar>
      <NameLabel name={name}></NameLabel>
    </div>
  );
}
