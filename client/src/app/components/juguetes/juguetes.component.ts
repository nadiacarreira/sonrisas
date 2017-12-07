import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { CentreService } from '../../../services/centres.service';

@Component({
  selector: 'app-juguetes',
  templateUrl: './juguetes.component.html',
  styleUrls: ['./juguetes.component.css']
})
export class JuguetesComponent implements OnInit {
  centres:any =[];
  constructor( private centreService:CentreService) {
    this.centreService.getCentres()
    .map(centro => this.centres = centro)
    .subscribe();
  }

  ngOnInit() {
  }


}
