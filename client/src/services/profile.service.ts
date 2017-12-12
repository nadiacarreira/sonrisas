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
  getUserDetail(id){
    return this.http.get(`${BASEURL}/${id}`)
                    .map(res => res.json());
  }
}
