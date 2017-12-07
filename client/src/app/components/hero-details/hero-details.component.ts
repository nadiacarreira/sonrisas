import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  kid;
  constructor(
    private route:ActivatedRoute,
    private heroesService: HeroesService) {
      this.route.params.subscribe(params=>{
        this.heroesService.get(params['id'])
        .subscribe(hero => this.kid = hero)
      });
  }
  ngOnInit() {}
}
