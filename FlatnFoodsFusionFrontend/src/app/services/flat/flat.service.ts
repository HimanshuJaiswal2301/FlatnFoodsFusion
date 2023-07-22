import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat } from 'src/app/model/Flat';

@Injectable({
  providedIn: 'root'
})
export class FlatService {

  baseUrl= 'http://localhost:8080/flat';
  constructor( private http:HttpClient) { }

  // getFlats(){
  //   return this.http.get<Flat[]>(this.baseUrl);
  // }
  postFlat(flat:any){
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/add`,flat ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
 
  getFlats(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/all` ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  //  public addFlat(flat: any){
  //   return this.http.post(`${baseUrl}/add`,flat);
  // }
}
