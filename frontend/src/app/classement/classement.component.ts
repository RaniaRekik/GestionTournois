import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Equipe } from '../equipe/equipe';
import { Pool } from '../pool/pool';
import { RencontreService } from '../services/rencontre.service';
import { EquipeService }  from '../services/equipe.service';
import { MatchService } from '../services/match.service';
import { ClassementService } from '../services/classement.service';

import { PoolService } from '../services/pool.service';


@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  public pool : Pool;
public equipes : Equipe[];
public pools : Pool[];
public poolId : number;
public name:string
  constructor(private route: ActivatedRoute, private router: Router, private classementService : ClassementService, private poolService : PoolService) { }

  ngOnInit(): void {
    this.getPools();
  


    

  }

  public getClassementByPoolId(poolId: number): void {
    this.classementService.getClassementByPool(poolId).subscribe(
      (response: Equipe[]) => {
        this.equipes = response;
        console.log("equipes",this.equipes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  classementPool(poolId: number, name:string){
    this.router.navigate(['PoolClassement', poolId,name]);
  }
  public getPools(): void {
    this.poolService.getPools().subscribe(
      (response: Pool[]) => {
        this.pools = response;
        console.log(this.pools);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 

}
