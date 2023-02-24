import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lilies-food-place';

  ngOnInit(): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    if (!orders) {
      localStorage.setItem('orders', JSON.stringify([]));
    }
  }
}
