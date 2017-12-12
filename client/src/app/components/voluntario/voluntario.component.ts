import { Component, OnInit } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.component.html',
  styleUrls: ['./voluntario.component.css']
})
export class VoluntarioComponent implements OnInit {

      public myDatePickerOptions: IMyDpOptions = {
          // other options...
          dateFormat: 'dd.mm.yyyy',
      };

      // Initialized to specific date (09.10.2018).
      public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor() { }

  ngOnInit() {
  }

}
