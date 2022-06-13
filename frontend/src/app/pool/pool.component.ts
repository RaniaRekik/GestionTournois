import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoolService } from '../services/pool.service';
import { Pool } from './pool';
@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;
  user: string = '';
  public pools: Pool[];
  public deletePool : Pool;
  public editPool : Pool;

  
  constructor(private poolService: PoolService){}

  ngOnInit(): void {
    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');
    this.getPools()
  }
   
  


  
  public onDeletePool(poolId: number): void {
    this.poolService.deletePool(poolId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPools();
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
 
  
  public onAddPool(addForm: NgForm): void {
    
     this.poolService.addPool(addForm.value).subscribe(
       (response: Pool) => {
        this.getPools();
         console.log(response);
          addForm.reset();
          },
       (error: HttpErrorResponse) => {
         alert(error.message);
         addForm.reset();
       }
     );
   }



  


   public onUpdatePool(pool: Pool): void {
    this.poolService.updatePool(pool).subscribe(
      (response: Pool) => {
        console.log(response);
        this.getPools();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


   public onOpenModal(pool: Pool, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPoolModal');
    }
   if (mode === 'edit') {
      this.editPool = pool;
      button.setAttribute('data-target', '#updatePoolModal');
    }
    if (mode === 'delete') {
      this.deletePool = pool;
      button.setAttribute('data-target', '#deletePoolModal');
    }
    container.appendChild(button);
    button.click();
  }
}
