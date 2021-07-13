import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CharacterEffects } from './character/character.effects';
import { FilmEffects } from './film/film.effects';
import { charactersReducer, CharacterStateModel } from './character/character.reducer';
import { environment } from '../../environments/environment';
import { filmsReducer, FilmStateModel } from './film/film.reducer';


export interface StateModel {
  characters: CharacterStateModel;
  films: FilmStateModel;
}

@NgModule({
  imports: [
    StoreModule.forRoot({
      characters: charactersReducer,
      films: filmsReducer,
    }),
    EffectsModule.forRoot([
      CharacterEffects,
      FilmEffects,
    ]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  exports: [
    StoreModule,
    EffectsModule,
  ],
})
export class StateModule { }
