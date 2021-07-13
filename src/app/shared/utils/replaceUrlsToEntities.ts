import { getIdFromUrl } from './getIdFromUrl';


export const replaceUrlsToEntities = <T>(urls: string[], entities: {[key: number]: T}): T[] => {
  return urls
    .map(getIdFromUrl)
    .map(id => entities[id]);
};
