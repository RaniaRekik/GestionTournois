import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { User } from "../user.model";
import { Router } from "@angular/router";
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    registrationForm: FormGroup;
    user = new User('', '', '', []);
    isRegistered = false;
    submitted = false;
    errorMessage = '';
    roles: any = [
        {name:'User', id:1, selected: true},
        {name:'Admin', id:2, selected: false},
    ]
    selectedRoles: string[];
    constructor(private authService: AuthService, private router: Router){ }
    ngOnInit() {
        this.registrationForm = new FormGroup({
            userName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            roleSelection: this.createRoles(this.roles)
        });
    }

    createRoles(rolesList): FormArray{
        const arr = rolesList.map(role => {
        return new FormControl(role.selected)
        });
        return new FormArray(arr);
    }
    onSubmit(){
        this.submitted = true;
        this.user.userName = this.registrationForm.value.userName;
        this.user.email = this.registrationForm.value.email;
        this.user.password = this.registrationForm.value.password;
        this.user.roles = this.getSelectedRoles();
        this.registerUser()
    }
    registerUser(){
        this.authService.signup(this.user)
        .subscribe(user=> {
            console.log(user);
            this.isRegistered = true;
        }, error=> {
            console.log(error);
            this.errorMessage = error;
            this.isRegistered = false;
        });
    }

    login(){
      this.router.navigate(['login']);
    }

    getSelectedRoles():string[]  {
        this.selectedRoles = this.registrationForm.value.roleSelection.map((selected, i) => {
          if(selected){
            return this.roles[i].name;
          }else {
            return '';
          }
        });

        return this.selectedRoles.filter(function (element) {
          if (element !== '') {
            return element;
          }
        });
      }
}