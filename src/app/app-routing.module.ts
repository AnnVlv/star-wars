import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./characters/characters.module')
      .then(m => m.CharactersModule),
  },
  {
    path: ':id',
    loadChildren: () => import('./character-details/character-details.module')
      .then(m => m.CharacterDetailsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
