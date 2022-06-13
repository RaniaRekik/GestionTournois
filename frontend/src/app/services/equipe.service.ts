import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Equipe } from '../equipe/equipe';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class    EquipeService {
    apiBaseUrl: 'http://localhost:8080'

  private apiServerUrl ='http://localhost:8083/equipe'

  constructor(private http: HttpClient){}
/*
  public updateEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiServerUrl}/updateArbitre`, equipe);
  }*/

  public deleteEquipe(equipeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteEquipe/${equipeId}`);
  } 

  public updateEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.put<Equipe>(`${this.apiServerUrl}/updateEquipe`, equipe);
  } 


  public addEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(`${this.apiServerUrl}/addEquipe`, equipe);
  }

  public geEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.apiServerUrl}/allEquipe`);
  }
}