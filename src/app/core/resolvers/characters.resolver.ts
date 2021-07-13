import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

import { CharacterService } from '../services/character.service';


@Injectable({
  providedIn: 'root',
})
export class CharactersResolver implements Resolve<Observable<boolean>> {
  constructor(
    private characterService: CharacterService,
  ) { }

  resolve(): Observable<boolean> {
    this.characterService.getCharacters();

    return this.characterService.loading$.pipe(
      filter(loading => loading),
      take(1),
      switchMap(() => this.characterService.loading$.pipe(
        filter(loading => !loading),
        take(1),
      )),
    );
  }
}
