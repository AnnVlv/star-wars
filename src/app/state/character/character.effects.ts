import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  GET_CHARACTER,
  GET_CHARACTERS,
  getCharacterFail,
  getCharactersFail,
  getCharactersSuccess,
  getCharacterSuccess,
} from './character.actions';
import { CharacterApiService } from '../../core/services/character-api.service';


@Injectable()
export class CharacterEffects {
  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_CHARACTERS),
      mergeMap(() => this.characterApiService.getCharacters().pipe(
        map(characters => getCharactersSuccess(characters)),
        catchError(() => of(getCharactersFail()))
      ))
    )
  );

  getCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_CHARACTER),
      mergeMap(({payload}) => this.characterApiService.getCharacter(payload).pipe(
        map(character => getCharacterSuccess([character])),
        catchError(() => of(getCharacterFail()))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private characterApiService: CharacterApiService,
  ) {
  }
}
