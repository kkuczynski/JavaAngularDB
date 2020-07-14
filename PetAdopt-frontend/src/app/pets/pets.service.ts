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
  private urlWithHome = environment.urlPetsWithHome;
  private urlWithNoHome = environment.urlPetsWithNoHome;

  constructor(private http: HttpClient) { }
  getPetsWithNoHome(): Observable<PetsInterface[]> {
    return this.http.get<PetsInterface[]>(this.urlWithNoHome);
  }
  getPetsWithHome(): Observable<PetsInterface[]> {
    return this.http.get<PetsInterface[]>(this.urlWithHome);
  }
}
