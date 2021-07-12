import { Component } from '@angular/core';

import { CharacterService } from '../core/services/character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters$ = this.characterService.characters$;

  constructor(
    private characterService: CharacterService,
  ) { }
}
