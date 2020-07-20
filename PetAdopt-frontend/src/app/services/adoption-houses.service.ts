import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdoptionHousesEntity } from '../domain/external/adoption-houses.entity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class AdoptionHousesService {
  private URL = environment.urlAdoptionHouses;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<AdoptionHousesEntity[]> {
    return this.http.get<AdoptionHousesEntity[]>(this.URL);
  }

  getUser(id: number) {
    return this.http.get<AdoptionHousesEntity>(this.URL + '/' + id, httpOptions);
  }

  postNewUser(house: AdoptionHousesEntity) {
    return this.http.post<AdoptionHousesEntity>(this.URL, house, httpOptions);
  }

  putUser(house: AdoptionHousesEntity) {
    return this.http.put<AdoptionHousesEntity>(this.URL, house, httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete<string>(this.URL + '/' + id, httpOptions);
  }

}
