import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AdoptionHousesExternal } from '../domain/external/adoption-houses.external';

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

  getAllHouses(): Observable<AdoptionHousesExternal[]> {
    return this.http.get<AdoptionHousesExternal[]>(this.URL);
  }

  getHouse(id: number): Observable<AdoptionHousesExternal> {
    return this.http.get<AdoptionHousesExternal>(this.URL + '/' + id);
  }

  postNewHouse(house: AdoptionHousesExternal) {
    return this.http.post<AdoptionHousesExternal>(this.URL, house, httpOptions);
  }

  putHouse(house: AdoptionHousesExternal) {
    return this.http.put<AdoptionHousesExternal>(this.URL, house, httpOptions);
  }

  deleteHouse(id: number) {
    return this.http.delete<string>(this.URL + '/' + id, httpOptions);
  }

}
