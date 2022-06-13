import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Equipe } from '../equipe/equipe';
import { Match } from '../match/match';
import { RencontreService } from '../services/rencontre.service';
import { EquipeService }  from '../services/equipe.service';
import { MatchService } from '../services/match.service';
import { ButService } from '../services/but.service';
import { HttpErrorResponse } from '@angular/common/http';

import { Rencontre } from './rencontre';



@Component({
  selector: 'app-rencontre',
  templateUrl: './rencontre.component.html',
  styleUrls: ['./rencontre.component.css']
})
export class RencontreComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  user: string = '';
  public equipes: Equipe[]
  public matchs: Match[]
  public rencontres: Rencontre[]
  constructor(private rencontreService : RencontreService, private matchService: MatchService,private equipeService: EquipeService ) { }

  clicked = false;



  ngOnInit(): void {
    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');
    this.getEquipes();
    this.getMatchs();
    this.getRencontres();
  }


public updateScore(rencontreId:number): void {
  this.rencontreService.updateScore(rencontreId).subscribe(
    (response: Rencontre) => {
      console.log(response);
        },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );

}


public updateBut(rencontreId:number): void {
  this.rencontreService.updateBut(rencontreId).subscribe(
    (response: Rencontre) => {
      console.log(response);
        },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );

}

  public getEquipes(): void {
    this.equipeService.geEquipes().subscribe(
      (response: Equipe[]) => {
        this.equipes = response;
        console.log('equipe',this.equipes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMatchs(): void {
    this.matchService.getMatchs().subscribe(
      (response: Match[]) => {
        this.matchs = response;
       // console.log('match',this.matchs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public getRencontres(): void {
    this.rencontreService.getRencontres().subscribe(
      (response: Rencontre[]) => {
        this.rencontres = response;
        console.log(this.rencontres);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddRencontre(addForm: NgForm): void {
    // document.getElementById('add-employee-form').click();
     this.rencontreService.addRencontre(addForm.value).subscribe(
       (response: Rencontre) => {
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


   public onOpenModal(rencontre: Rencontre, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRencontreModal');
    }
    /*if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }*/
    container.appendChild(button);
    button.click();
  }




}
