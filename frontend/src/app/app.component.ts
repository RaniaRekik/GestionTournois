import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from "@angular/router";
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientFormation';

  constructor(private authService: AuthService, private router :Router){}
  //isLoggedIn = false;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  userName: string;
  userRoles: string;

  user: string = '';

  ngOnInit() {

//
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.isLoggedIn   = this.authService.LoggedIn;
      }
    })
  //

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      });
    
    this.user = sessionStorage.getItem("roles");
    this.userName = sessionStorage.getItem("username");

   this.showAdminBoard = this.user.includes('ROLE_ADMIN');
    this.showUserBoard = this.user.includes('ROLE_USER');


    //Toggle Click Function

}

getUserName(){
  return sessionStorage.getItem("username");
}
getUserRole(){
 return sessionStorage.getItem("roles");
}
onLogOut(){
 this.authService.logout();
}

loggedIn(){
 return this.authService.isLoggedIn()
}



  //opened=false;
 /*  selectedMenu:any='arbitre'
goTo(paramTexte:string)
{
  this.selectedMenu = paramTexte
} */
}


