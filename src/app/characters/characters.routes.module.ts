import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CharacterDetailsPageComponent } from './pages/character-details-page/character-details-page.component';

const routes: Route[] = [
  {
    path: '',
    component: CharactersPageComponent,
  },
  {
    path: ':id',
    component: CharacterDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutesModule {}
