import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetsEntity } from '../domain/external/pets.entity';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

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

  getPetsWithNoHome() {
    return this.http.get<PetsEntity[]>(this.URL_WITH_NO_HOME);
  }

  getPetsWithHome() {
    return this.http.get<PetsEntity[]>(this.URL_WITH_HOME);
  }

  postNewPet(pet: PetsEntity) {
    console.log(JSON.stringify(pet));
    return this.http.post<PetsEntity>(this.URL, pet, httpOptions);
  }
}
