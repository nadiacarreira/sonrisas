import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{


  constructor(private auth:AuthService,
              private router: Router ) { }

  login(username, password){
    this.auth.login(username,password).subscribe();
    this.router.navigate(['/profile/:id']);
  }

  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['/home']);
  }
  submitForm(myForm) {
    console.log(myForm);
  }

}
