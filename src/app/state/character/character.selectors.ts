import { createSelector } from '@ngrx/store';

import { StateModel } from '../state.module';
import { CharacterStateModel } from './character.reducer';


export const selectCharactersState = (state: StateModel) => state?.characters;

export const selectCharacters = createSelector(
  selectCharactersState,
  ({ids, entities}: CharacterStateModel) => ids?.map(id => entities[id]),
);
