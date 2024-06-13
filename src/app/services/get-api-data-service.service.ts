import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatDTO } from '../shared/models/cat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiDataServiceService {
  private baseAPI: string = 'https://api.thecatapi.com/v1/images/';

  constructor(private http: HttpClient) { }

  getNumberOfCats(): Observable<CatDTO[]> {
    return this.http.get<CatDTO[]>(this.baseAPI + 'search?limit=10');
  }

  getCatById(id: string): Observable<CatDTO> {
    return this.http.get<CatDTO>(this.baseAPI + id);
  }
}
