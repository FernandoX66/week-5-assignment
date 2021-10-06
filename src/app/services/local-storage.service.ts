import { Injectable } from '@angular/core';
import { Burger } from '../interfaces/burger.interface';

@Injectable()
export class LocalStorageService {
  private _storage: any = localStorage;

  saveToStorage(burger: Burger): void {
    this._storage.setItem('burger', JSON.stringify(burger));
  }

  getBurgersHistory(): Burger[] {
    return this._storage.getItem('burgers');
  }

  saveBurgerToHistory(burgersHistory: Burger[]): void {
    this._storage.setItem('burgers', JSON.stringify(burgersHistory));
  }
}
