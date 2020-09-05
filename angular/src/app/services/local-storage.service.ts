import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {
    this.storage = window.localStorage;
  }

  storage: Storage;

  getItem(key: string) {
    return this.storage.getItem(key);
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }
}
