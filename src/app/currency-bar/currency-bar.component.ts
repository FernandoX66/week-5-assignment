import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-bar',
  templateUrl: './currency-bar.component.html',
  styleUrls: ['./currency-bar.component.scss'],
})
export class CurrencyBarComponent {
  currentCurrency: string = 'USD';

  @Output() onCurrencyChanged: EventEmitter<string> = new EventEmitter();

  changeCurrency(target: any) {
    this.currentCurrency = target.textContent;
    this.onCurrencyChanged.emit(this.currentCurrency);
  }
}
