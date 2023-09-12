import { Component } from '@angular/core';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroe: Heroe = {
    id: 1,
    name: 'Windstorm'
  };
}
