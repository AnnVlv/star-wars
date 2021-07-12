import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

import { CharacterService } from '../services/character.service';
import { CharacterStateModel } from '../../state/character/character.reducer';


@Injectable({
  providedIn: 'root',
})
export class CharactersResolver implements Resolve<Observable<CharacterStateModel>> {
  constructor(
    private characterService: CharacterService,
  ) { }

  resolve(): Observable<CharacterStateModel> {
    this.characterService.getCharacters();

    return this.characterService.charactersState$.pipe(
      filter(request => request.loading),
      take(1),
      switchMap(() => this.characterService.charactersState$.pipe(
        filter(request => !request.loading),
        take(1),
      )),
    );
  }
}
