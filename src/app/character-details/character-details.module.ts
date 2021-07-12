import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailsComponent } from './character-details.component';
import { CharacterDetailsRoutingModule } from './character-details-routing.module';


@NgModule({
  declarations: [
    CharacterDetailsComponent,
  ],
  imports: [
    CommonModule,
    CharacterDetailsRoutingModule
  ],
  exports: [
    CharacterDetailsComponent,
  ],
})
export class CharacterDetailsModule { }
