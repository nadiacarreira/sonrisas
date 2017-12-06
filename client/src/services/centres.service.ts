import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

const DOMAIN = "http://localhost:3000";
const PATH = "/centres";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class CentreService {
  constructor(private http: Http) {
  console.log('servicio listo para usar');
  }
  getCentres():Observable<any>{
    console.log("hola");
    console.log(BASEURL)
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }
}
