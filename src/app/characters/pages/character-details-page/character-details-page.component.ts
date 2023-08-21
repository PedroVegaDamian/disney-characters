import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharactersService } from '../../characters.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss'],
})
export class CharacterDetailsPageComponent implements OnInit {
  public character: Character | null = null;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.getCharacterById(id);
    });
  }

  getCharacterById(id: string): void {
    this.charactersService.getCharacterById(id).subscribe((response) => {
      this.character = response.data;
    });
  }
}
