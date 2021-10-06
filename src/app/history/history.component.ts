import { Component } from '@angular/core';
import { Burger } from '../interfaces/burger.interface';
import { BurgerService } from '../services/app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  burgersHistory: Burger[] = [];

  constructor(public burgerService: BurgerService) {
    this.burgersHistory = this.burgerService.burgersHistory;
  }

  restoreBurger(event: any): void {
    this.burgerService.restoreBurger(Number(event.value));
  }
}
