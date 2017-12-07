import { Component, OnInit } from '@angular/core';
import  { CentreService } from '../../../services/centres.service';


@Component({
  selector: 'app-economica',
  templateUrl: './economica.component.html',
  styleUrls: ['./economica.component.css']
})
export class EconomicaComponent implements OnInit {
  centres:any =[];
  constructor( private centreService:CentreService) {
    this.centreService.getCentres()
    .map(centro => this.centres = centro)
    .subscribe();
  }
ngOnInit(){}
}
