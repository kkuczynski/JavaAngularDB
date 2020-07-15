import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetsInterface } from '../domain/external/pets.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private URL = environment.urlPets;
  private URL_WITH_HOME = environment.urlPetsWithHome;
  private URL_WITH_NO_HOME = environment.urlPetsWithNoHome;

  constructor(private http: HttpClient) { }

  getPetsWithNoHome(){
    return this.http.get<PetsInterface[]>(this.URL_WITH_NO_HOME);
  }

  getPetsWithHome(){
    return this.http.get<PetsInterface[]>(this.URL_WITH_HOME);
  }

  postNewPet(pet: PetsInterface){
    return this.http.post<PetsInterface>(this.URL, pet);
  }
}
