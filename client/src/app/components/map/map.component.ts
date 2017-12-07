import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers:Array<marker>= [
    {
      name: 'Unidad de Madres Jaime Garralda, Madrid',
      lat: 40.4320067,
      lng: -3.7115450,
      arrastrable: false
    },
    {
      name: 'Unidad de Madres Jaime Garralda, Sevilla',
      lat: 37.392248,
      lng: -5.847396,
      arrastrable: false
    },
    {
      name: 'Unidad de Madres Jaime Garralda, Las palmas',
      lat: 39.566854,
      lng: 2.685642,
      arrastrable: false
    }
 ];

  constructor() {
  }
    zoom:number = 10;

  //initial position
   lat: number = 40.4320067;
   lng: number = -3.7115450;

   //points marker

//
  ngOnInit() {
  }
  searchCentre(termino:string){
    console.log(termino)
  }
 }

//tipo de marcador
interface marker{
  name:string;
  lat:number;
  lng:number;
  arrastrable:boolean;
}
