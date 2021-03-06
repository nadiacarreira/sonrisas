import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';

const DOMAIN = environment.baseurl;
const BASE_URL = `${DOMAIN}/api/auth`;

@Injectable()
export class AuthService {
  options:object = {
    withCredentials:true
  }

  user:object;
  loginEvent:EventEmitter<object> = new EventEmitter();

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  handleError(e) {
    const error_message = e.json().message;
    console.error(error_message);
    return Observable.throw(e.json().message);
  }

  handleUser(obj) {
    this.user = obj;
    this.loginEvent.emit(this.user);
    return this.user;
  }

  signup(username, password, email, sex, age) {
    console.log(username, password)
    return this.http.post(`${BASE_URL}/signup`, {username, password, email, sex, age}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  login(username:string, password:string) {
    console.log(`Login with user:${username} and password ${password}`);
    return this.http.post(`${BASE_URL}/login`, {username, password}, this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${BASE_URL}/logout`,this.options)
      .map(res => res.json())
      .map(user => this.handleUser(null))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASE_URL}/loggedin`,this.options)
      .map(res => res.json())
      .map(user => this.handleUser(user))
      .catch(this.handleError);
  }
  sendMail(){
    console.log(this.user)
    return this.http.post(`${DOMAIN}/email/sendEmail`, this.user, this.options)
    .map(res=> res.json())
  }
}
