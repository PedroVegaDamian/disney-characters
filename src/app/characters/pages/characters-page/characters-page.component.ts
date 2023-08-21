import { Component } from '@angular/core';

import { CharactersService } from '../../characters.service';
import { Character } from 'src/app/characters/interfaces/character';

@Component({
  selector: 'characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss'],
})
export class CharactersPageComponent {
  constructor(private charactersService: CharactersService) {}

  get characters(): Character[] {
    return this.charactersService.getCharacters();
  }
}
