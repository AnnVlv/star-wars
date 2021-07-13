import { createSelector } from '@ngrx/store';

import { StateModel } from '../state.module';
import { FilmStateModel } from './film.reducer';


export const selectFilmsState = (state: StateModel) => state?.films;

export const selectFilms = createSelector(
  selectFilmsState,
  ({ids, entities}: FilmStateModel) => ids?.map(id => entities[id]),
);

export const selectFilm = (id: number) => createSelector(
  selectFilmsState,
  ({entities}: FilmStateModel) => entities[id],
);

export const selectLoading = createSelector(
  selectFilmsState,
  ({loading}: FilmStateModel) => loading,
);
