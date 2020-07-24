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

  constructor(private http: HttpClient) { }

  getAllHouses(): Observable<AdoptionHousesExternal[]> {
    return this.http.get<AdoptionHousesExternal[]>(environment.urlAdoptionHouses);
  }

  getHouse(id: number): Observable<AdoptionHousesExternal> {
    return this.http.get<AdoptionHousesExternal>(environment.urlAdoptionHouses + '/' + id);
  }

  postNewHouse(house: AdoptionHousesExternal): Observable<AdoptionHousesExternal> {
    return this.http.post<AdoptionHousesExternal>(environment.urlAdoptionHouses, house, httpOptions);
  }

  putHouse(house: AdoptionHousesExternal): Observable<AdoptionHousesExternal> {
    return this.http.put<AdoptionHousesExternal>(environment.urlAdoptionHouses, house, httpOptions);
  }

  deleteHouse(id: number): Observable<string> {
    return this.http.delete<string>(environment.urlAdoptionHouses + '/' + id, httpOptions);
  }

}
