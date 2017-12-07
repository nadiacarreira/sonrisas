import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/kids";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class HeroesService {
  kids;
  constructor(private http: Http) {}
  getKids():Observable<any>{
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }
  get(id):Observable<any> {
    return this.http.get(`${BASEURL}/${id}`)
                    .map(res => res.json());
    }
}
