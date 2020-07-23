import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetsExternal } from '../domain/external/pets.external';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  // const ? dla tych 3?
  private URL = environment.urlPets;
  private URL_WITH_HOME = environment.urlPetsWithHome;
  private URL_WITH_NO_HOME = environment.urlPetsWithNoHome;

  constructor(private http: HttpClient) { }

  getPet(id: number): Observable<PetsExternal> {
    return this.http.get<PetsExternal>(this.URL + '/' + id);
  }

  // HALO TYP ZWRACANY
  getAllPets() {
    return this.http.get<PetsExternal[]>(this.URL);
  }
  // HALO TYP ZWRACANY
  getPetsWithNoHome() {
    return this.http.get<PetsExternal[]>(this.URL_WITH_NO_HOME);
  }
  // HALO TYP ZWRACANY
  getPetsWithHome() {
    return this.http.get<PetsExternal[]>(this.URL_WITH_HOME);
  }
  // HALO TYP ZWRACANY
  postNewPet(pet: PetsExternal) {
    return this.http.post<PetsExternal>(this.URL, pet, httpOptions);
  }
  // HALO TYP ZWRACANY
  putPet(pet: PetsExternal) {
    return this.http.put<PetsExternal>(this.URL, pet, httpOptions);
  }
  // HALO TYP ZWRACANY
  deletePet(id: number) {
    return this.http.delete<string>(this.URL + '/' + id, httpOptions);
  }
}
