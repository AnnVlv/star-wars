import { Film } from './film';


export interface Character {
  name: string;
  films: string[] | Film[];
}
