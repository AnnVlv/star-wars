import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailsComponent } from './character-details.component';
import { CharacterResolver } from '../core/resolvers/character.resolver';


const routes: Routes = [
  {
    path: '',
    component: CharacterDetailsComponent,
    resolve: [
      CharacterResolver,
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CharacterDetailsRoutingModule { }
