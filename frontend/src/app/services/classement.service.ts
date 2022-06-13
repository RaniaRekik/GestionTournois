import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { But } from '../but/but';
import { Equipe } from '../equipe/equipe';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ClassementService {
   // apiBaseUrl: 'http://localhost:8080'
  private apiServerUrl ='http://localhost:8083/score'

  constructor(private http: HttpClient){}
/*
  public getButs(): Observable<But[]> {
    return this.http.get<But[]>(`${this.apiServerUrl}/get/all`);
  }*/

  public getButs(): Observable<But[]> {
    return this.http.get<But[]>(`${this.apiServerUrl}/get/all`);
  }
  public calculButs(equipeId: number, matchId: number): Observable<number> {
    return this.http.get<number>(`${this.apiServerUrl}/test/${equipeId}/${matchId}`);
  }

  public getClassementByPool(PoolId: number): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.apiServerUrl}/getClassement/${PoolId}`);
  }
/* 
  getParticipantById(id: number): Observable<any>{
    return this.httpClient.get<Participant>(`${this.baseURL}/${id}`);
  } */




/*
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

   public deleteArbitre(arbitreId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteArbitre/${arbitreId}`);
  } 

*/

}
