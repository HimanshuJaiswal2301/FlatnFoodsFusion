import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flat } from 'src/app/model/Flat';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  baseUrl= 'http://localhost:8080/flat';
  constructor(private http: HttpClient) { }
  public search = new BehaviorSubject<string>("");

  postFlat(flat: any) {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/add`, flat, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getFlats(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  customFilter(startPrice: number, endPrice: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/filter/custom/${startPrice}/${endPrice}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  searchFlats(query: string): Observable<any> {
    // You can implement the search logic here using the 'query' parameter
    // For now, let's just pass the query to the backend and handle the search there
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/search/${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  flatsByUserId(id: number): Observable<any> {
    // You can implement the search logic here using the 'query' parameter
    // For now, let's just pass the query to the backend and handle the search there
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/userFlats/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  flatsByCityName(cityName: string): Observable<any> {
    // You can implement the search logic here using the 'query' parameter
    // For now, let's just pass the query to the backend and handle the search there
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/filter/city/${cityName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
