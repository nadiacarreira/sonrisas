import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../environments/environment';



const DOMAIN = environment.baseurl;
const PATH = "/kids";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class HeroesService {
  kids;
  constructor(private http: Http) {}
  // list
  getKids():Observable<any>{
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }
  // kids id
  get(id):Observable<any> {
    return this.http.get(`${BASEURL}/${id}`)
                    .map(res => res.json());
  }


    // edit kid id

  getEditKidByID(id):Observable<any>{
    return this.http.put(`${BASEURL}/${id}`, this.kids)
                    .map(res => res.json());
  }

  deleteKid(id){
      console.log(id)
      console.log("entro en el front");
      return this.http.delete(`${BASEURL}/delete-heroes/${id}`)
                      .map(res => res.json());
  }
    // newKid() {
  //   return this.http.post(`${BASEURL}/new-kid`, {photo, name, age, about}, this.options)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
}
