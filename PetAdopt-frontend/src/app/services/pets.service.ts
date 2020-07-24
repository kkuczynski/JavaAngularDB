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

  constructor(private http: HttpClient) { }

  getPet(id: number): Observable<PetsExternal> {
    return this.http.get<PetsExternal>(environment.urlPets + '/' + id);
  }

  getAllPets(): Observable<PetsExternal[]> {
    return this.http.get<PetsExternal[]>(environment.urlPets);
  }

  postNewPet(pet: PetsExternal): Observable<PetsExternal> {
    return this.http.post<PetsExternal>(environment.urlPets, pet, httpOptions);
  }

  putPet(pet: PetsExternal): Observable<PetsExternal> {
    return this.http.put<PetsExternal>(environment.urlPets, pet, httpOptions);
  }

  deletePet(id: number): Observable<string> {
    return this.http.delete<string>(environment.urlPets + '/' + id, httpOptions);
  }
}
