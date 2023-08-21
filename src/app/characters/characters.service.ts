import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {
  Character,
  ResponseCharacter,
  ResponseCharacters,
} from './interfaces/character';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private baseUrl: string = 'https://api.disneyapi.dev';
  private characters: Character[] = [];

  constructor(private http: HttpClient) {}

  getCharacters(): Character[] {
    return this.characters;
  }

  loadCharacters(): void {
    this.http
      .get<ResponseCharacters>(`${this.baseUrl}/character`)
      .subscribe((response: ResponseCharacters) => {
        this.characters = response.data;
      });
  }

  getCharacterById(id: string): Observable<ResponseCharacter> {
    return this.http.get<ResponseCharacter>(`${this.baseUrl}/character/${id}`);
  }
}
