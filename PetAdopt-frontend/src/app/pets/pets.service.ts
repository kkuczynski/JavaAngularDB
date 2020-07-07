import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetsInterface } from './pets.interface';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private url = 'http://localhost:8088/pets';

  constructor(private http: HttpClient) { }
  getUsers(): Observable<PetsInterface[]> {
    return this.http.get<PetsInterface[]>(this.url);
  }
}
