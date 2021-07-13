import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Film } from '../../shared/interfaces';


@Injectable({
  providedIn: 'root',
})
export class FilmApiService {
  URL = 'films';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${this.URL}/${id}`);
  }
}
