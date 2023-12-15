import StatIcon from '../StatIcon/StatIcon';
import CharacterAvatar from '../CharacterAvatar/CharacterAvatar';
import styles from './Card.module.css';
import { useRef, useState } from 'react';
import { Badge, Form, Input, Modal } from 'antd';
import { updateCharacterStatsById } from '@/services/characters/updateStats';
import { FireTwoTone, HeartTwoTone } from '@ant-design/icons';

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
  const initiative = useRef<any>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    await updateCharacterStatsById(
      id,
      lifePoints?.current?.input?.value ?? 0,
      manaPoints?.current?.input?.value ?? 0,
      initiative?.current?.input?.value ?? 0
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.cardSection}>
      <Badge
        className={styles.badge}
        count={`CA ${currentDef}`}
        color='gray'
        size='small'
      >
        <div className={styles.avatar} onClick={showModal}>
          <CharacterAvatar
            classDesc={classDesc}
            level={level}
            name={name}
            imageSrc={charImage}
          ></CharacterAvatar>
        </div>
      </Badge>
      <div className={styles.stats}>
        <StatIcon
          color='red'
          icon={<HeartTwoTone twoToneColor='firebrick' size={20} />}
          total={totalPv}
          current={currentPv}
        ></StatIcon>
        <StatIcon
          color='blue'
          icon={<FireTwoTone twoToneColor='navy' size={20} />}
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
          <Form.Item label='Initiative'>
            <Input placeholder='Initiative' color='gray' ref={initiative} />
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
}
