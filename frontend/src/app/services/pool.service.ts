import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pool } from '../pool/pool';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PoolService {
    apiBaseUrl: 'http://localhost:8080'

  private apiServerUrl ='http://localhost:8083/Pool'

  constructor(private http: HttpClient){}

 

  public addPool(pool: Pool): Observable<Pool> {
    return this.http.post<Pool>(`${this.apiServerUrl}/addPool`, pool);
  }

  public getPools(): Observable<Pool[]> {
    return this.http.get<Pool[]>(`${this.apiServerUrl}/get/all`);
  }

  

  public updatePool(pool: Pool): Observable<Pool> {
    return this.http.put<Pool>(`${this.apiServerUrl}/updatePool`, pool);
  } 

  public deletePool(poolId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deletePool/${poolId}`);
  } 

}