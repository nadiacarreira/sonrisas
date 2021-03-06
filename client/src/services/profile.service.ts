import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment }  from '../environments/environment';

const DOMAIN = environment.baseurl;
const PATH = "/profile";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class ProfileService {
  user;

  private options = {withCredentials:true};

  constructor(
    private http: Http) {}

  getUser(id):Observable<any>{
    console.log("hola")
    return this.http.get(`${BASEURL}/${id}`, this.options)
                    .map(res => res.json());
  }
}
