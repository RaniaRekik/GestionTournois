import { Component, OnInit } from '@angular/core';

import { ArbitreService } from '../services/arbitre.service';
import { MatchService } from '../services/match.service';
import { Arbitre } from '../arbitre/arbitre';
import { Match } from './match';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Equipe } from '../equipe/equipe';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  user: string = '';
  public arbitres: Arbitre[];
  public matchs: Match[];
  public deleteMatch : Match;
  public editMatch : Match;
  public etat:string;
  public equipes : Equipe[];
  constructor(private matchService: MatchService, private arbitreService: ArbitreService ,private router: Router   ){}
 
  ngOnInit() {
    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');
    this.getArbitres();
    this.getMatchs();
  }

  public getMatchs(): void {
    this.matchService.getMatchs().subscribe(
      (response: Match[]) => {
        this.matchs = response;
        console.log(this.matchs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public findAllEquipeByEtat(etat: string): void {
    this.matchService.findAllEquipeByEtat(etat).subscribe(
      (response: Equipe[]) => {
        this.equipes = response;
        console.log(this.equipes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  equipeFiltre(etat: string){
    this.router.navigate(['FiltreEquipe', etat]);
  }
  
  public onUpdateMatch(match: Match): void {
    this.matchService.updateMatch(match).subscribe(
      (response: Match) => {
        console.log(response);
        this.getMatchs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getArbitres(): void {
    this.arbitreService.getArbitres().subscribe(
      (response: Arbitre[]) => {
        this.arbitres = response;
        console.log("arbitres",this.arbitres);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteMatch(matchId: number): void {
    this.matchService.deleteMatch(matchId).subscribe(
      (response: void) => {
        console.log(response);
        this.getMatchs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddMatch(addForm: NgForm): void {
    // document.getElementById('add-employee-form').click();
     this.matchService.addMatch(addForm.value).subscribe(
     
       (response: Match) => {
         console.log(response);
         //this.getArbitres();
         addForm.reset();
       },
       (error: HttpErrorResponse) => {
         alert(error.message);
         addForm.reset();
       }
     );
   }

   public onOpenModal(match: Match, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMatchModal');
    }
   if (mode === 'edit') {
      this.editMatch = match;
      button.setAttribute('data-target', '#updateMatchModal');
    }
    
    if (mode === 'delete') {
      this.deleteMatch = match;
      button.setAttribute('data-target', '#deleteMatchModal');
    }
    container.appendChild(button);
    button.click();
  }




}
