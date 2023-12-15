import { httpClient } from '../httpClient';

export const updateCharacterStatsById = async (
  id: string,
  lifePoints: number,
  manaPoints: number,
  initiative: number
) => {
  const { data } = await httpClient.put(`/v1/characters/${id}/stats`, {
    stats: {
      lifePoints: Number(lifePoints ?? 0),
      manaPoints: Number(manaPoints ?? 0),
      initiative: Number(initiative ?? 0),
    },
  });

  return data.data.characters;
};
