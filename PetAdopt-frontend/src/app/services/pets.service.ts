import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetsInterface } from '../domain/external/pets.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  // pola prywatne zaczynamy od _
  private url = environment.urlPets;
  private urlWithHome = environment.urlPetsWithHome;
  private urlWithNoHome = environment.urlPetsWithNoHome;

  constructor(private http: HttpClient) { }
  getPetsWithNoHome() {
    return this.http.get<PetsInterface[]>(this.urlWithNoHome);
  }
  getPetsWithHome() {
    return this.http.get<PetsInterface[]>(this.urlWithHome);
  }
  postNewPet(pet: PetsInterface) {
    return this.http.post<PetsInterface>(this.url, pet);
  }
}
