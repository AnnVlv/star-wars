import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  GET_CHARACTER,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTERS,
  GET_CHARACTERS_SUCCESS,
  getCharacterFail,
  getCharactersFail,
  getCharactersSuccess,
  getCharacterSuccess,
} from './character.actions';
import { CharacterApiService } from '../../core/services/character-api.service';
import { Character } from '../../shared/interfaces';
import { FilmService } from '../../core/services/film.service';
import { getUniqIdsFromEntities } from '../../shared/utils/getUniqIdsFromEntities';


@Injectable()
export class CharacterEffects {
  getCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(GET_CHARACTERS),
    switchMap(() => this.characterApiService.getCharacters().pipe(
      map(characters => getCharactersSuccess(characters)),
      catchError(() => of(getCharactersFail())),
    )),
    tap(action => {
      if (action.type === GET_CHARACTERS_SUCCESS) {
        const characters = (action as {payload: Character[]}).payload;
        getUniqIdsFromEntities(characters, 'films').forEach(id => {
          this.filmService.getFilm(Number(id));
        });
      }
    }),
  ));

  getCharacter$ = createEffect(() => this.actions$.pipe(
    ofType(GET_CHARACTER),
    switchMap(({payload}) => this.characterApiService.getCharacter(payload).pipe(
      map(character => getCharacterSuccess([character])),
      catchError(() => of(getCharacterFail())),
    )),
    tap(action => {
      if (action.type === GET_CHARACTER_SUCCESS) {
        const characters = (action as {payload: Character[]}).payload;
        getUniqIdsFromEntities(characters, 'films').forEach(id => {
          this.filmService.getFilm(Number(id));
        });
      }
    }),
  ));

  constructor(
    private actions$: Actions,
    private characterApiService: CharacterApiService,
    private filmService: FilmService,
  ) {
  }
}
