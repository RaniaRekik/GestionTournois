import { Component, OnInit } from '@angular/core';
import { Pool } from '../pool/pool';
import { Equipe } from './equipe';
import { PoolService } from '../services/pool.service';
import { EquipeService }  from '../services/equipe.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  user: string = '';
  public pools: Pool[];
  public equipes: Equipe[]
  public deleteEquipe: Equipe;
  public editEquipe: Equipe;
  constructor(private poolService: PoolService, private equipeService: EquipeService ) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');
    this.getPools()
    this.getEquipes()
    
  }

  public getEquipes(): void {
    this.equipeService.geEquipes().subscribe(
      (response: Equipe[]) => {
        this.equipes = response;
        console.log(this.equipes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  public onAddEquipe(addForm: NgForm): void {
    // document.getElementById('add-employee-form').click();
     this.equipeService.addEquipe(addForm.value).subscribe(
     
       (response: Equipe) => {
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
 
   public onDeleteEquipe(equipeId: number): void {
    this.equipeService.deleteEquipe(equipeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEquipes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onUpdateEquipe(equipe: Equipe): void {
    this.equipeService.updateEquipe(equipe).subscribe(
      (response: Equipe) => {
        console.log(response);
        this.getEquipes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
   public onOpenModal(equipe: Equipe, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEquipeModal');
    }
   if (mode === 'edit') {
      this.editEquipe = equipe;
      button.setAttribute('data-target', '#updateEquipeModal');
    }
    if (mode === 'delete') {
      this.deleteEquipe = equipe;
      button.setAttribute('data-target', '#deleteEquipeModal');
    }
    container.appendChild(button);
    button.click();
  }


}
