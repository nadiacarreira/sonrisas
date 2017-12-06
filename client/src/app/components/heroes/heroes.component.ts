import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  kids:any =[];
  constructor( private heroesService:HeroesService,
               private router: Router ) {
    this.heroesService.getKids()
    .map(heroes => this.kids = heroes)
    .subscribe();
  }

  ngOnInit() {}

}
