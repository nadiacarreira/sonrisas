import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-centres',
  templateUrl: './edit-centres.component.html',
  styleUrls: ['./edit-centres.component.css']
})
export class EditCentresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // editKid(id){
  //   this.route.params.subscribe(params => {
  //     this.heroesService.getEditKidByID(params['id'])
  //       .subscribe(kid => this.kid = kid);
  //         this.router.navigate(['/kids/:id']);
  //   })
  // }

}
