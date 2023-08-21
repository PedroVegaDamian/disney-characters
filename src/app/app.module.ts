import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutesModule } from './app.routes.module';
import { SharedModule } from './shared/shared.module';
import { CharactersModule } from './characters/characters.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    SharedModule,
    CharactersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
