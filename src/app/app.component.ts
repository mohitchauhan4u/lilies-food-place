import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lilies-food-place';
  cart: any[] = [];
  orders: any[] = [];
  ngOnInit(): void {
    // localStorage.setItem('cart', JSON.stringify(this.cart));
    // localStorage.setItem('orders', JSON.stringify(this.orders));
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('orders', JSON.stringify([]));
  }
}
