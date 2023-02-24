import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ordersCount: number = 0;
  cartCount: number = 0;
  dashboardSelected: boolean = true;
  @Output() ordersButtonClicked = new EventEmitter();
  @Output() cartButtonClicked = new EventEmitter();

  constructor(private loaclService: LocalService) {}

  ngOnInit(): void {
    this.ordersCount = this.loaclService.getOrderCount();
    this.cartCount = this.loaclService.getCartCount();
    this.loaclService.ordersCountChange.subscribe(() => {
      this.ordersCount = this.loaclService.getOrderCount();
    });
    this.loaclService.cartCountChange.subscribe(() => {
      this.cartCount = this.loaclService.getCartCount();
    });
  }

  showOrders() {
    this.ordersButtonClicked.emit();
  }

  showCart() {
    this.cartButtonClicked.emit();
  }
}
