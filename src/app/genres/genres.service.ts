import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreationDTO, genreDTO } from './genre.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private client: HttpClient) {}

  private apiUrl = environment.apiUrl + '/genres';

  getAll(): Observable<genreDTO[]> {
    return this.client.get<genreDTO[]>(this.apiUrl);
  }

  create(genre: genreCreationDTO) {
    return this.client.post(this.apiUrl, genre);
  }
}
