import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const DOMAIN = "http://localhost:3000";
const PATH = "/profile";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class ProfileService {
  user:object;

  private options = {withCredentials:true};

  constructor(private http: Http) {}

  // deleteUser(){
  //   return this.http.delete(`${BASE_URL}/profile/delete`)
  //   .map(res => res.json());
  // }
  //
  // getUserDetail(id){
  //   return this.http.get(`${BASE_URL}/profile/${id}`)
  //                   .map(res => res.json());
  // }
  //
  // getEditUser(id){
  //   return this.http.get(`${BASE_URL}/profile/edit-profile/${id}`)
  //                   .map(res => res.json());
  // }
}
