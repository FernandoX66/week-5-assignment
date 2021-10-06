import { Component } from '@angular/core';
import { Burger } from '../interfaces/burger.interface';
import { BurgerService } from '../services/app.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  burgersHistory: Burger[] = [];
  burger: Burger = {
    id: 1,
    ingredients: [],
    tomatoAmount: 0,
    cheeseAmount: 0,
    saladAmount: 0,
    meatAmount: 0,
    totalAmount: 0,
  };

  burgerToAdd: Burger = {
    id: 1,
    ingredients: [],
    tomatoAmount: 0,
    cheeseAmount: 0,
    saladAmount: 0,
    meatAmount: 0,
    totalAmount: 0,
  };

  constructor(private burgerService: BurgerService) {
    this.burger = burgerService.burger;
    this.burgersHistory = this.burgerService.burgersHistory;
  }

  addIngredient(ingredient: string): void {
    this.burgerService.addIngredient(ingredient);
    this.burgerService.saveBurgerState();
  }

  removeIngredient(ingredient: string): void {
    this.burgerService.removeIngredient(ingredient);
    this.burgerService.saveBurgerState();
  }

  addBurger(): void {
    this.burgerToAdd = Object.assign({}, this.burgerService.burger);
    this.burgerToAdd.ingredients = [...this.burgerService.burger.ingredients];

    this.burgersHistory.push(this.burgerToAdd);
    this.burgerService.addBurger(this.burgersHistory);
  }
}
