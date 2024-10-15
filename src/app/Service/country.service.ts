import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Interface/country-interface';
// import data from '../../../data.json'


@Injectable({
  providedIn: 'root'
})
export class CountryService {
private apiUrl = 'data.json';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrl);
  }
}
