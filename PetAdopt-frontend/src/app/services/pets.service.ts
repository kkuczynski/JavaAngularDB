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

  private URL = environment.urlPets;
  private URL_WITH_HOME = environment.urlPetsWithHome;
  private URL_WITH_NO_HOME = environment.urlPetsWithNoHome;

  constructor(private http: HttpClient) { }

  getPet(id: number): Observable<PetsExternal> {
    return this.http.get<PetsExternal>(this.URL + '/' + id);
  }

  getAllPets() {
    return this.http.get<PetsExternal[]>(this.URL);
  }

  getPetsWithNoHome() {
    return this.http.get<PetsExternal[]>(this.URL_WITH_NO_HOME);
  }

  getPetsWithHome() {
    return this.http.get<PetsExternal[]>(this.URL_WITH_HOME);
  }

  postNewPet(pet: PetsExternal) {
    return this.http.post<PetsExternal>(this.URL, pet, httpOptions);
  }

  putPet(pet: PetsExternal) {
    return this.http.put<PetsExternal>(this.URL, pet, httpOptions);
  }

  deletePet(id: number) {
    return this.http.delete<string>(this.URL + '/' + id, httpOptions);
  }
}
