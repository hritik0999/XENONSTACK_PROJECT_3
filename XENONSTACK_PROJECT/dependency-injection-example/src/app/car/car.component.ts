
import { carEngine } from '../engine';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car',

  templateUrl: './car.component.html',

  styleUrls: ['./car.component.css'],

  providers :[carEngine]

})
export class CarComponent  {

  constructor( private bestCarEngine : carEngine) { }

  carEngineNames = "xeric";

  showCarsEngine = () =>
  {

    this.carEngineNames =this.bestCarEngine.getCarEngine();

  }

  addCarsEngine = (carEngineNames:string) =>
  {

    this.bestCarEngine.insertMyNewCar(carEngineNames);

  }

}
