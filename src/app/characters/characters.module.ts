import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutesModule } from './characters.routes.module';

import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterDetailsPageComponent } from './pages/character-details-page/character-details-page.component';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterDetailsPageComponent,
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [CommonModule, CharactersRoutesModule],
  exports: [CharactersPageComponent, CharacterDetailsPageComponent],
})
export class CharactersModule {}
