import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';


const DOMAIN = environment.baseurl;
const PATH = "/centres";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class CentreService {
  centres;
  constructor(private http: Http) {}
  getCentres():Observable<any>{
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }
  get(id):Observable<any> {
    return this.http.get(`${BASEURL}/${id}`)
                    .map(res => res.json());
    }
}
