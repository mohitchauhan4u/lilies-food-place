import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  ordersCountChange = new EventEmitter<string>();
  cartCountChange = new EventEmitter<string>();

  constructor() {
    this.getOrderCount();
    this.getCartCount();
  }

  emitOrdersCountChange() {
    this.ordersCountChange.emit();
  }

  emitCartCountChange() {
    this.cartCountChange.emit();
  }

  getOrderCount() {
    const orders = JSON.parse(localStorage.getItem('orders') || '');
    return orders.length;
  }

  getCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '');
    return cart.length;
  }
}
