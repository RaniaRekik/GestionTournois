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
  selector: 'app-pool-classement',
  templateUrl: './pool-classement.component.html',
  styleUrls: ['./pool-classement.component.css']
})
export class PoolClassementComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  user: string = '';
  public equipes : Equipe[];
  public i :1;
  public index :1;
  public pools : Pool[];
  public pool :Pool;
  public name:string;
  public poolId : number;
  constructor( private route: ActivatedRoute, private router: Router, private classementService : ClassementService, private poolService : PoolService) { }

  ngOnInit(): void {

    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');


    this.poolId = this.route.snapshot.params['poolId'];
    this.name = this.route.snapshot.params['name'];
    //this.getClassementByPoolId(this.PoolId);
    console.log("poolId",this.poolId )
    this.classementService.getClassementByPool(this.poolId)
    .subscribe(
   (response: Equipe[]) => {
         this.equipes = response;
         console.log("equipes",this.equipes);
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }
     );
   }

  

  }



 
