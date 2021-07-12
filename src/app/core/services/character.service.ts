import { Injectable } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getCharacter, getCharacters } from '../../state/character/character.actions';
import { StateModel } from '../../state/state.module';
import { Character } from '../../shared/interfaces';
import { CharacterStateModel } from '../../state/character/character.reducer';
import { selectCharacters } from '../../state/character/character.selectors';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  charactersState$: Observable<CharacterStateModel> = this.store.select(s => s?.characters);

  characters$: Observable<Character[]> = this.store.select(selectCharacters);

  constructor(
    private store: Store<StateModel>,
  ) { }

  selectCharacter(id: number): Observable<Character> {
    return this.charactersState$.pipe(
      map(({entities}) => entities[id]),
    );
  }

  getCharacters(): void {
    this.store.dispatch(getCharacters());
  }

  getCharacter(id: number): void {
    this.store.dispatch(getCharacter(id));
  }
}
