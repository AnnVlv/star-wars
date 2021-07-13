import { getIdFromUrl } from './getIdFromUrl';


export const getUniqIdsFromEntities = (entities: any[], filed: string) => {
  return [...new Set(
    entities
      .reduce<string[]>((acc, entity) => {
        return [
          ...acc,
          ...(entity[filed] as string[]),
        ];
      }, [])
      .map(getIdFromUrl)
  )];
};
