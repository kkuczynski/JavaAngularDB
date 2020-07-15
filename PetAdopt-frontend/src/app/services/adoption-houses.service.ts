import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdoptionHousesInterface } from '../domain/external/adoption-houses.interface';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class AdoptionHousesService {
  // pola prywatne zaczynamy od _
  // formatowanie
  private url = environment.urlAdoptionHouses;

  constructor(private http: HttpClient) { }
  getAH(): Observable<AdoptionHousesInterface[]> {
    return this.http.get<AdoptionHousesInterface[]>(this.url);
  }
}
