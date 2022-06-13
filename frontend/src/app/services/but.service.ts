import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { But } from '../but/but';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ButService {
   // apiBaseUrl: 'http://localhost:8080'
  private apiServerUrl ='http://localhost:8083/but'

  constructor(private http: HttpClient){}

  public getButs(): Observable<But[]> {
    return this.http.get<But[]>(`${this.apiServerUrl}/get/all`);
  }

  public addBut(but: But): Observable<But> {
    return this.http.post<But>(`${this.apiServerUrl}/add`, but);
  }
/*
  public updateArbitre(arbitre: Arbitre): Observable<Arbitre> {
    return this.http.put<Arbitre>(`${this.apiServerUrl}/updateArbitre`, arbitre);
  }*/
/* 
  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  } */
}