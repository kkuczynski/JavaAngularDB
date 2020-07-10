import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetsInterface } from './pets.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private url = environment.urlPets;

  constructor(private http: HttpClient) { }
  getPets(): Observable<PetsInterface[]> {
    return this.http.get<PetsInterface[]>(this.url);
  }
}
