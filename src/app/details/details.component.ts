import { Component } from '@angular/core';
import { Burger } from '../interfaces/burger.interface';
import { BurgerService } from '../services/app.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  burger: Burger = {
    ingredients: [],
    id: 1,
    tomatoAmount: 0,
    saladAmount: 0,
    cheeseAmount: 0,
    meatAmount: 0,
    totalAmount: 0,
  };
  currentCurrency: string = 'USD';

  constructor(private burgerService: BurgerService) {
    this.burger = burgerService.burger;
  }

  currencyChanged(currency: string) {
    this.currentCurrency = currency;
  }
}
