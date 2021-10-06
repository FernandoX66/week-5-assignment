import { Component } from '@angular/core';
import { Burger } from '../interfaces/burger.interface';
import { BurgerService } from '../services/app.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent {
  burger: Burger = {
    ingredients: [],
    id: 1,
    tomatoAmount: 0,
    saladAmount: 0,
    cheeseAmount: 0,
    meatAmount: 0,
    totalAmount: 0,
  };

  constructor(private burgerService: BurgerService) {
    this.burger = burgerService.burger;
  }
}
