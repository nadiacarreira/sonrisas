import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/api/kids";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class HeroesService {
  constructor(private http: Http) {
  console.log('servicio listo para usar');
  }
  getKids():Observable<any>{
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }
}
