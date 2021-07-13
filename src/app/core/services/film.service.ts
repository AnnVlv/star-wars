import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { StateModel } from '../../state/state.module';
import { getFilm } from '../../state/film/film.actions';


@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(
    private store: Store<StateModel>,
  ) { }

  getFilm(id: number): void {
    this.store.dispatch(getFilm(id));
  }
}
