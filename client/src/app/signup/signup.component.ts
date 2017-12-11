import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
formInfo: any ={
  username: "",
  password:"",
  email: "",
  sex: "",
  age: ""
}
  constructor(private auth:AuthService,
              private router: Router ) { }

  ngOnInit() {}
  signup(){
    const {username, password, email, sex, age} = this.formInfo
    this.auth.signup(username, password, email, sex, age).subscribe();
    this.router.navigate(['/profile']);
  }

}
