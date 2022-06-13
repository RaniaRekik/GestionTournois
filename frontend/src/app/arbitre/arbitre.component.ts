import { Component, OnInit } from '@angular/core';
import { ArbitreService } from '../services/arbitre.service';
import { Arbitre } from './arbitre';

import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.css']
})
export class ArbitreComponent implements OnInit {
  public arbitres: Arbitre[];
  public editArbitre: Arbitre;
  public deleteArbitre:  Arbitre;

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  user: string = '';
  constructor(private arbitreService: ArbitreService){}

  ngOnInit(): void {
    this.getArbitres()
    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');
    
  }


  public getArbitres(): void {
    this.arbitreService.getArbitres().subscribe(
      (response: Arbitre[]) => {
        this.arbitres = response;
        console.log(this.arbitres);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 
  public onDeleteArbitre(arbitreId: number): void {
    this.arbitreService.deleteArbitre(arbitreId).subscribe(
      (response: void) => {
        console.log(response);
        this.getArbitres();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddArbitre(addForm: NgForm): void {
    // document.getElementById('add-employee-form').click();
     this.arbitreService.addArbitre(addForm.value).subscribe(
       (response: Arbitre) => {
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

   public onUpdateArbitre(arbitre: Arbitre): void {
    this.arbitreService.updateArbitre(arbitre).subscribe(
      (response: Arbitre) => {
        console.log(response);
        this.getArbitres();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




   public onOpenModal(arbitre: Arbitre, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addArbitreModal');
    }
    if (mode === 'edit') {
      this.editArbitre = arbitre;
      button.setAttribute('data-target', '#updateArbitreModal');
    }
    
    if (mode === 'delete') {
      this.deleteArbitre = arbitre;
      button.setAttribute('data-target', '#deleteArbitreModal');
    }
    container.appendChild(button);
    button.click();
  }



}
