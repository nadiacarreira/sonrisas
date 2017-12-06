import { Component, OnInit } from '@angular/core';
import { CentreService } from '../../../services/centres.service';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent implements OnInit {
  centres:any =[];
  constructor( private centreService:CentreService) {
    this.centreService.getCentres()
    .map(centro => this.centres = centro)
    .subscribe();
  }

  ngOnInit() {

  }
}
