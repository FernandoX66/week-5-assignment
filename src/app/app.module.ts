import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BurgerService } from './services/app.service';
import { DetailsComponent } from './details/details.component';
import { BurgerComponent } from './burger/burger.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CurrencyBarComponent } from './currency-bar/currency-bar.component';
import { LocalStorageService } from './services/local-storage.service';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DetailsComponent,
    BurgerComponent,
    ButtonsComponent,
    CurrencyBarComponent,
    HistoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BurgerService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
