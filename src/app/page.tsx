'use client';
import { useEffect, useState } from 'react';
import { Card } from './components/Card/Card';
import styles from './page.module.css';
import {
  fetchCharacters,
  fetchCharactersRealTime,
} from '@/services/characters/fetchCharacterData';
import { wsCallback } from '@/services/realTime';
import { isBinary } from 'istextorbinary';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  const onUpdate: wsCallback = (msg: MessageEvent<any>) => {
    // if (isBinary(msg)) {
    //   console.log('Buffer');
    //   return;
    // }

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
          <main className={styles.main}>
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
        </div>
      </div>
    </div>
  );
}
