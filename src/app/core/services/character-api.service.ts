import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character, Api } from '../../shared/interfaces';


@Injectable({
  providedIn: 'root',
})
export class CharacterApiService {
  URL = 'people';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<Api<Character>>(this.URL).pipe(
      map(data => data.results),
    );
  }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.URL}/${id}`);
  }
}
