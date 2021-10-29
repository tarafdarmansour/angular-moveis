import { Injectable } from '@angular/core';
import { genreDTO } from './genre.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor() {}

  getAll(): genreDTO[] {
    return [{ id: 1, name: 'Drama' }];
  }
}
