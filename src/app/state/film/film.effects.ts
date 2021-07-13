import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  GET_FILM,
  getFilmFail,
  getFilmSuccess,
} from './film.actions';
import { FilmApiService } from '../../core/services/film-api.service';


@Injectable()
export class FilmEffects {
  getFilms$ = createEffect(() => this.actions$.pipe(
    ofType(GET_FILM),
    mergeMap(({payload}) => {
      return this.filmApiService.getFilm(payload).pipe(
        map(film => getFilmSuccess([film])),
        catchError(() => of(getFilmFail())),
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private filmApiService: FilmApiService,
  ) {
  }
}
