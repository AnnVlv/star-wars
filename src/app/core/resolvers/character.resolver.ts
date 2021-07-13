import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

import { CharacterService } from '../services/character.service';


@Injectable({
  providedIn: 'root',
})
export class CharacterResolver implements Resolve<Observable<boolean>> {
  constructor(
    private characterService: CharacterService,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = Number(route.paramMap.get('id'));
    this.characterService.getCharacter(id);

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
