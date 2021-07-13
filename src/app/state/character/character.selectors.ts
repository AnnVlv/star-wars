import { createSelector } from '@ngrx/store';

import { StateModel } from '../state.module';
import { CharacterStateModel } from './character.reducer';
import { selectFilmsState } from '../film/film.selectors';
import { FilmStateModel } from '../film/film.reducer';
import { replaceUrlsToEntities } from '../../shared/utils';


export const selectCharactersState = (state: StateModel) => state?.characters;

export const selectCharacters = createSelector(
  selectCharactersState,
  selectFilmsState,
  (characters: CharacterStateModel, films: FilmStateModel) => characters.ids?.map(id => ({
    ...characters.entities[id],
    films: replaceUrlsToEntities(characters.entities[id]?.films as string[], films.entities),
  })),
);

export const selectCharacter = (id: number) => createSelector(
  selectCharactersState,
  selectFilmsState,
  (characters: CharacterStateModel, films: FilmStateModel) => ({
    ...characters.entities[id],
    films: replaceUrlsToEntities(characters.entities[id]?.films as string[], films.entities),
  }),
);

export const selectLoading = createSelector(
  selectCharactersState,
  ({loading}: CharacterStateModel) => loading,
);
