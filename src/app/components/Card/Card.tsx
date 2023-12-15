import StatIcon from '../StatIcon/StatIcon';
import CharacterAvatar from '../CharacterAvatar/CharacterAvatar';
import styles from './Card.module.css';
import { useRef, useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { updateCharacterStatsById } from '@/services/characters/updateStats';

export function Card({
  id,
  name,
  charImage,
  totalPv,
  currentPv,
  totalMana,
  currentMana,
  totalDef,
  currentDef,
  classDesc,
  level,
}: {
  id: string;
  name: string;
  charImage: string;
  totalPv: number;
  currentPv: number;
  totalMana: number;
  currentMana: number;
  totalDef: number;
  currentDef: number;
  classDesc: string;
  level: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lifePoints = useRef<any>(null);
  const manaPoints = useRef<any>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    await updateCharacterStatsById(
      id,
      lifePoints?.current?.input?.value ?? 0,
      manaPoints?.current?.input?.value ?? 0
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.cardSection}>
      <div className={styles.avatar} onClick={showModal}>
        <CharacterAvatar
          classDesc={classDesc}
          level={level}
          name={name}
          imageSrc={charImage}
        ></CharacterAvatar>
      </div>
      <div className={styles.stats}>
        <StatIcon
          color='purple'
          src='https://cdn-icons-png.flaticon.com/512/3892/3892597.png'
          total={totalDef}
          current={currentDef}
        ></StatIcon>
        <StatIcon
          color='red'
          src='https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png'
          total={totalPv}
          current={currentPv}
        ></StatIcon>
        <StatIcon
          color='blue'
          src='https://www.shareicon.net/data/128x128/2016/10/12/843649_halloween_512x512.png'
          total={totalMana}
          current={currentMana}
        ></StatIcon>
      </div>
      <Modal
        title='Stats Change'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleOk}>
          <Form.Item label='PV'>
            <Input placeholder='Life Points' color='red' ref={lifePoints} />
          </Form.Item>
          <Form.Item label='PM'>
            <Input placeholder='Mana Points' color='blue' ref={manaPoints} />
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
}
