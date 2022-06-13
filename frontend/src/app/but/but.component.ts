import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe/equipe';
import { Match } from '../match/match';
import { PoolService } from '../services/pool.service';
import { EquipeService }  from '../services/equipe.service';
import { MatchService } from '../services/match.service';
import { ButService } from '../services/but.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { But } from './but';
@Component({
  selector: 'app-but',
  templateUrl: './but.component.html',
  styleUrls: ['./but.component.css']
})
export class ButComponent implements OnInit {
  public equipes: Equipe[]
  public matchs: Match[]
  public buts : But[]
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  user: string = '';
  constructor(private butService: ButService,  private equipeService: EquipeService , private matchService: MatchService) { }

  ngOnInit() {
    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');
    this.getEquipes();
    this.getMatchs();
    this.getButs();
  }

  public getButs(): void {
    this.butService.getButs().subscribe(
      (response: But[]) => {
        this.buts = response;
        console.log("buts",this.buts);
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
        console.log("maatchess",this.matchs);
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



  public onAddBut(addForm: NgForm): void {
    // document.getElementById('add-employee-form').click();
     this.butService.addBut(addForm.value).subscribe(
       (response: But) => {
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

   public onOpenModal(but: But, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addButModal');
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
