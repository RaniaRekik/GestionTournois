import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Arbitre } from '../arbitre/arbitre';
import { Match } from '../match/match';
import { Equipe } from '../equipe/equipe';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MatchService {
    apiBaseUrl: 'http://localhost:8080'
  private apiServerUrl2 ='http://localhost:8083/arbitre'
  private apiServerUrl ='http://localhost:8083/match'
  private apiServerScore ='http://localhost:8083/score'

  constructor(private http: HttpClient){}

  public getArbitres(): Observable<Arbitre[]> {
    return this.http.get<Arbitre[]>(`${this.apiServerUrl2}/allArbitre`);
  }

  public addMatch(match: Match): Observable<Match> {
    return this.http.post<Match>(`${this.apiServerUrl}/addmatch`, match);
  }

  public getMatchs(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiServerUrl}/get/all`);
  }

  
  public updateMatch(match: Match): Observable<Match> {
    return this.http.put<Match>(`${this.apiServerUrl}/updateMatch`, match);
  }

  public findAllEquipeByEtat(etat: string): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.apiServerScore}/findAllEquipeByEtat/${etat}` );
  } 

  public deleteMatch(matchId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${matchId}`);
  } 
/*
  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }*/
}