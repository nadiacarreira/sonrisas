import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { CentreService } from '../../../services/centres.service';

@Component({
  selector: 'app-centres-details',
  templateUrl: './centres-details.component.html',
  styleUrls: ['./centres-details.component.css']
})
export class CentresDetailsComponent implements OnInit {
  centre;
  constructor(
    private route:ActivatedRoute,
    private centreService: CentreService) {
      this.route.params.subscribe(params=>{
        this.centreService.get(params['id'])
        .subscribe(centro => this.centre = centro)
      })
    }

  ngOnInit() {
  }

}
