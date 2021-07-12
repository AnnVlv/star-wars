import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CharacterEffects } from './character/character.effects';
import { charactersReducer, CharacterStateModel } from './character/character.reducer';
import { environment } from '../../environments/environment';


export interface StateModel {
  characters: CharacterStateModel;
}

@NgModule({
  imports: [
    StoreModule.forRoot({
      characters: charactersReducer,
    }),
    EffectsModule.forRoot([
      CharacterEffects,
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
