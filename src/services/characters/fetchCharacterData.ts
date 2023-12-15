import { partial } from 'ramda';
import { getRealTimeData } from '../realTime';
import { httpClient } from '../httpClient';

export const fetchCharactersRealTime = partial(getRealTimeData, [
  '/v1/characters',
]);

export const fetchCharacters = async () => {
  const { data } = await httpClient.get('/v1/characters');

  return data.data.characters;
};
