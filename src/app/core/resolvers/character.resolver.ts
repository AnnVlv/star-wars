import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

import { CharacterService } from '../services/character.service';
import { CharacterStateModel } from '../../state/character/character.reducer';


@Injectable({
  providedIn: 'root',
})
export class CharacterResolver implements Resolve<Observable<CharacterStateModel>> {
  constructor(
    private characterService: CharacterService,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<CharacterStateModel> {
    const id = Number(route.paramMap.get('id'));
    this.characterService.getCharacter(id);

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
