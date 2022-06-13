import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rencontre } from '../rencontre/rencontre';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class RencontreService {
  private apiBaseUrl: 'http://localhost:8083'
  private apiServerUrl ='http://localhost:8083'

  constructor(private http: HttpClient){}

  public getRencontres(): Observable<Rencontre[]> {
    return this.http.get<Rencontre[]>(`${this.apiServerUrl}/Rencontre/all`);
  }

  public addRencontre(rencontre: Rencontre): Observable<Rencontre> {
    return this.http.post<Rencontre>(`${this.apiServerUrl}/Rencontre/addRencontre`, rencontre);
  }


  public updateScore(rencontreId: number): Observable<Rencontre> {
    return this.http.put<Rencontre>(`${this.apiServerUrl}/score/calcScore/${rencontreId}`,rencontreId);
  }

  public updateBut(rencontreId: number): Observable<Rencontre> {
    return this.http.put<Rencontre>(`${this.apiServerUrl}/score/updatescore/${rencontreId}`,rencontreId);
  }





/*

  public updateScore(rencontreId: number, rencontre:Rencontre): Observable<Rencontre> {
    return this.http.put<Rencontre>(`${this.apiServerUrl}/calcScore//${rencontreId}`, rencontre);
  }



  updateProfile(id: number, profil: Profile): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, profil);
  }



  public deleteEquipe(equipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteEquipe/${equipeId}`);
  } 


  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }
  public calculButs(equipeId: number, matchId: number): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/test/${equipeId}/${matchId}`);
  }
*/


}