import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { CharactersResolver } from '../core/resolvers/characters.resolver';


const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    resolve: [
      CharactersResolver,
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
export class CharactersRoutingModule { }
