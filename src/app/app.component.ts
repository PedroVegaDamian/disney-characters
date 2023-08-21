import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.loadCharacters();
  }
}
