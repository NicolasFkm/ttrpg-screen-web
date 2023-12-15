'use client';
import { useEffect, useRef, useState } from 'react';
import { Card } from './components/Card/Card';
import styles from './page.module.css';
import {
  fetchCharacters,
  fetchCharactersRealTime,
} from '@/services/characters/fetchCharacterData';
import { wsCallback } from '@/services/realTime';
import { isBinary } from 'istextorbinary';
import HandoutUploader from './components/Handouts/HandoutUploader/HandoutUploader';
import HandoutModal from './components/Handouts/HandoutModal/HandoutModal';

export default function Home({ searchParams }: { searchParams: any }) {
  const handoutModal = useRef<any>();
  const [isAdmin, setIsAdmin] = useState(false);
  const [file, setFile] = useState(new Blob());
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setIsAdmin(searchParams.admin === 'true');
  }, []);

  const onUpdate: wsCallback = (msg: MessageEvent<any>) => {
    const isBuffer = isBinary(undefined, msg.data, () => {});

    if (
      msg.data instanceof Blob ||
      (isBuffer !== null && isBuffer! !== false)
    ) {
      setFile(msg.data);
      handoutModal?.current?.showModal();
      return;
    }

    const data = JSON.parse(msg.data as string);
    setCharacters(data);
  };

  useEffect(() => {
    fetchCharacters().then((data): void => {
      setCharacters(data);
      fetchCharactersRealTime(onUpdate);
    });
  }, []);
  return (
    <div className='body dark-background'>
      <div className='mid-border'>
        <div className='inner-border'>
          <img
            className='corner-decoration corner-left-top'
            src='https://i.ibb.co/4mKvK3N/corner-decoration.jpg'
          ></img>
          <img
            className='corner-decoration corner-right-top'
            src='https://i.ibb.co/4mKvK3N/corner-decoration.jpg'
          ></img>
          <img
            className='corner-decoration corner-right-bottom'
            src='https://i.ibb.co/4mKvK3N/corner-decoration.jpg'
          ></img>
          <img
            className='corner-decoration corner-left-bottom'
            src='https://i.ibb.co/4mKvK3N/corner-decoration.jpg'
          ></img>
          <main className={`${styles.main} character-list`}>
            {characters &&
              characters.map((character: any, index: number) => (
                <Card
                  key={index}
                  id={character._id}
                  name={character.name}
                  charImage={character.avatar}
                  currentDef={character.defense.current}
                  totalDef={character.defense.total}
                  currentMana={character.manaPoints.current}
                  totalMana={character.manaPoints.total}
                  currentPv={character.lifePoints.current}
                  totalPv={character.lifePoints.total}
                  level={character.class.level}
                  classDesc={character.class.name}
                ></Card>
              ))}
          </main>
          {isAdmin && <HandoutUploader></HandoutUploader>}
        </div>
      </div>
      {file && <HandoutModal ref={handoutModal} file={file}></HandoutModal>}
    </div>
  );
}
