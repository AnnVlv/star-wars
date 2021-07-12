import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from '../../shared/interfaces';
import { CharactersApi } from '../../shared/interfaces/characters-api';


@Injectable({
  providedIn: 'root',
})
export class CharacterApiService {
  URL = 'people';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<CharactersApi>(this.URL).pipe(
      map(data => data.results),
    );
  }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.URL}/${id}`);
  }
}
