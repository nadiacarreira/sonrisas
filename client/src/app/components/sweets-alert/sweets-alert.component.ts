import { Component, OnInit } from '@angular/core';
import { SweetAlertService } from '../../../services/sweets.service';

@Component({
  selector: 'app-sweets-alert',
  templateUrl: './sweets-alert.component.html',
  styleUrls: ['./sweets-alert.component.css']
})
export class SweetsAlertComponent implements OnInit {

  constructor(
    private alertService: SweetAlertService){ }

  ngOnInit() {
  }

}
