import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arbitre } from '../arbitre/arbitre';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ArbitreService {
    apiBaseUrl: 'http://localhost:8080'
  private apiServerUrl ='http://localhost:8083/arbitre'

  constructor(private http: HttpClient){}

  public getArbitres(): Observable<Arbitre[]> {
    return this.http.get<Arbitre[]>(`${this.apiServerUrl}/allArbitre`);
  }

  public addArbitre(arbitre: Arbitre): Observable<Arbitre> {
    return this.http.post<Arbitre>(`${this.apiServerUrl}/addArbitre`, arbitre);
  }

  public updateArbitre(arbitre: Arbitre): Observable<Arbitre> {
    return this.http.put<Arbitre>(`${this.apiServerUrl}/updateArbitre`, arbitre);
  }

  public deleteArbitre(arbitreId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteArbitre/${arbitreId}`);
  } 
}