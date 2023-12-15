import { Avatar } from 'antd';
import { NameLabel } from '../NameLabel/NameLabel';
import styles from './CharacterAvatar.module.css';

export default function CharacterAvatar({
  name,
  imageSrc,
  classDesc,
  level,
}: {
  name: string;
  imageSrc: string;
  classDesc: string;
  level: string;
}) {
  return (
    <div className={styles.avatarSection}>
      <Avatar className='img-wrap' size={150} src={imageSrc}></Avatar>
      <NameLabel classDesc={classDesc} level={level} name={name}></NameLabel>
    </div>
  );
}
