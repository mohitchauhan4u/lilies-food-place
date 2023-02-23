import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  ordersCount: number = 0;
  cartCount: number = 0;
  dashboardSelected: boolean = true;
  @Output() ordersButtonClicked = new EventEmitter();
  @Output() cartButtonClicked = new EventEmitter();

  showOrders() {
    this.ordersButtonClicked.emit();
  }

  showCart() {
    this.cartButtonClicked.emit();
  }
}
