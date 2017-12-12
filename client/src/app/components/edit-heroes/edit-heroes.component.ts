import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { AuthService } from '../../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-heroes',
  templateUrl: './edit-heroes.component.html',
  styleUrls: ['./edit-heroes.component.css']
})
export class EditHeroesComponent implements OnInit {
  kid;
  constructor(
    public heroesService: HeroesService,
    public auth:AuthService,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.heroesService.get(params['id'])
        .map(kid => this.kid = kid)
        .subscribe()
    })
  }

  editKid(kidId){
    this.heroesService.getEditKidByID(kidId)
      .map(kid => this.kid = kid)
      .subscribe()
      this.router.navigate(['/heroes']);
  }
}
