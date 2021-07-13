import { Injectable } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCharacter, getCharacters } from '../../state/character/character.actions';
import { StateModel } from '../../state/state.module';
import { Character } from '../../shared/interfaces';
import { selectCharacter, selectCharacters, selectLoading } from '../../state/character/character.selectors';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  loading$: Observable<boolean> = this.store.select(selectLoading);
  characters$: Observable<Character[]> = this.store.select(selectCharacters);

  constructor(
    private store: Store<StateModel>,
  ) { }

  selectCharacter(id: number): Observable<Character> {
    return this.store.select(selectCharacter(id));
  }

  getCharacters(): void {
    this.store.dispatch(getCharacters());
  }

  getCharacter(id: number): void {
    this.store.dispatch(getCharacter(id));
  }
}
