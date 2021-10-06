import { Injectable } from '@angular/core';
import { Burger } from '../interfaces/burger.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class BurgerService {
  private _burger: Burger = {
    ingredients: [],
    id: 1,
    tomatoAmount: 0,
    saladAmount: 0,
    cheeseAmount: 0,
    meatAmount: 0,
    totalAmount: 1,
  };

  private _burgersHistory: Burger[] = [];

  constructor(private localStorageService: LocalStorageService) {
    if (localStorage.getItem('burger')) {
      this._burger = JSON.parse(localStorage.getItem('burger')!);
    }

    if (localStorage.getItem('burgers')) {
      this._burgersHistory = JSON.parse(localStorage.getItem('burgers')!);
    }
  }

  get burger(): Burger {
    return this._burger;
  }

  get burgersHistory(): Burger[] {
    return this._burgersHistory;
  }

  addIngredient(ingredient: string): void {
    this._burger.ingredients.push(ingredient);

    if (ingredient === 'tomato') {
      this._burger.tomatoAmount += 1;
      this._burger.totalAmount += 0.35;
    } else if (ingredient === 'salad') {
      this._burger.saladAmount += 1;
      this._burger.totalAmount += 0.25;
    } else if (ingredient === 'cheese') {
      this._burger.cheeseAmount += 1;
      this._burger.totalAmount += 0.5;
    } else {
      this._burger.meatAmount += 1;
      this._burger.totalAmount += 1.5;
    }
  }

  removeIngredient(ingredient: string): void {
    let i = this._burger.ingredients.indexOf(ingredient);

    this._burger.ingredients.splice(i, 1);

    if (ingredient === 'tomato') {
      this._burger.tomatoAmount -= 1;
      this._burger.totalAmount -= 0.35;
    } else if (ingredient === 'salad') {
      this._burger.saladAmount -= 1;
      this._burger.totalAmount -= 0.25;
    } else if (ingredient === 'cheese') {
      this._burger.cheeseAmount -= 1;
      this._burger.totalAmount -= 0.5;
    } else {
      this._burger.meatAmount -= 1;
      this._burger.totalAmount -= 1.5;
    }
  }

  saveBurgerState(): void {
    this.localStorageService.saveToStorage(this._burger);
  }

  addBurger(burgersHistory: Burger[]): void {
    this._burger.id = this._burger.id + 1;
    this.saveBurgerState();

    this.localStorageService.saveBurgerToHistory(burgersHistory);
  }

  restoreBurger(burgerId: number): void {
    for (let burger of this._burgersHistory) {
      if (burger.id === burgerId) {
        this._burger.ingredients = [...burger.ingredients];
        this._burger.tomatoAmount = burger.tomatoAmount;
        this._burger.saladAmount = burger.saladAmount;
        this._burger.meatAmount = burger.meatAmount;
        this._burger.cheeseAmount = burger.cheeseAmount;
        this._burger.totalAmount = burger.totalAmount;
      }
    }
  }
}
