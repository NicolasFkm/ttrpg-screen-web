import StatIcon from '../StatIcon/StatIcon';
import CharacterAvatar from '../CharacterAvatar/CharacterAvatar';
import styles from './Card.module.css';
import { Space } from 'antd';

export function Card() {
  return (
    <section className={styles.cardSection}>
      <div className={styles.avatarColumn}>
        <CharacterAvatar
          name='Code'
          imageSrc='https://cdn.discordapp.com/attachments/1042145554324541472/1181086677695991879/nfukuyama_a_male_elf_ninja_redhead_scar_on_his_cheek_red_eyes_i_7dfa2079-caa8-46ce-9327-c9ea9d31ef24.png?ex=6589022f&is=65768d2f&hm=154f453fdb37e316d1a6d83c646b32ae91b5e3cf429506cc485b699cc096f9ac&'
        ></CharacterAvatar>
      </div>
      <div className={styles.statsColumn}>
        <StatIcon
          color='#f11'
          src='https://cdn-icons-png.flaticon.com/512/3892/3892597.png'
        ></StatIcon>
        <StatIcon
          color='#1f1'
          src='https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png'
        ></StatIcon>
        <StatIcon
          color='#11f'
          src='https://cdn-icons-png.flaticon.com/512/2068/2068425.png'
        ></StatIcon>
      </div>
    </section>
  );
}
