import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  kids;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    public heroesService: HeroesService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(`EL parametro recibido es: ${params['id']}`);
      this.getHeroDetails(params['id'])
    });
  }
  getHeroDetails(id) {
    this.heroesService.get(id)
      .subscribe((hero) => {
        this.kids = hero;
      });
  }
}
