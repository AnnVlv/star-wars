import { Character } from './character';


export interface CharactersApi {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}
