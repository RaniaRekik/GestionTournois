import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AllUsersComponent } from './users/allusers.component';
import { UserContent } from './users/usercontent.component';
import { AdminContent } from './users/admincontent.component';
import { RegisterComponent } from './auth/register/register.component';

import { EquipeComponent } from './equipe/equipe.component';
import { ArbitreComponent } from './arbitre/arbitre.component';
import { MatchComponent } from './match/match.component';
import { PoolComponent } from './pool/pool.component';
import { ClassementComponent } from './classement/classement.component';
import { ButComponent } from './but/but.component';
import { HomeComponent } from './home/home.component';
import { RencontreComponent } from './rencontre/rencontre.component';
import { FiltreEquipeComponent } from './filtre-equipe/filtre-equipe.component';
import {  PoolClassementComponent } from './pool-classement/pool-classement.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path: 'signup', component: RegisterComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'allusers', component: AllUsersComponent},
  {path: 'usercontent', component: UserContent},
  {path: 'admincontent', component: AdminContent},
  



  { path: 'home',component: HomeComponent},
  { path: 'arbitre', component: ArbitreComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'match', component: MatchComponent },
  { path: 'pool', component: PoolComponent },
  { path: 'but', component: ButComponent },
  { path: 'rencontre', component: RencontreComponent },
  { path: 'classement', component: ClassementComponent },
  {path: 'PoolClassement/:poolId/:name', component : PoolClassementComponent},
  {path: 'FiltreEquipe/:etat', component : FiltreEquipeComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




