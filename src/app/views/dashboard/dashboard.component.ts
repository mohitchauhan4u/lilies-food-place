import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartDialogComponent } from 'src/app/shared/dialogs/add-to-cart-dialog/add-to-cart-dialog.component';
import { CartDialogComponent } from 'src/app/shared/dialogs/cart-dialog/cart-dialog.component';
import { OrderDialogComponent } from 'src/app/shared/dialogs/order-dialog/order-dialog.component';
import { PaymentDialogComponent } from 'src/app/shared/dialogs/payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName: string = 'User';
  dishData: any[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getDishData();
  }

  getDishData() {
    this.productService.getDishData().subscribe((data) => {
      this.dishData = data.dishData;
    });
  }

  openAddToCartDialog(dish: any) {
    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      data: dish,
      panelClass: 'custom-add-to-cart-container',
      position: {
        right: '0',
      },
    });
  }

  openCartDialog() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const dialogRef = this.dialog.open(CartDialogComponent, {
      data: cart,
      panelClass: 'custom-cart-container',
      position: {
        right: '0',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.checkout) {
        this.openPaymentDialog();
      }
    });
  }

  openPaymentDialog() {
    const dialogRef = this.dialog.open(PaymentDialogComponent, {
      panelClass: 'custom-payment-container',
      position: {
        right: '0',
      },
    });
  }

  openOrderDialog() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      data: orders,
      panelClass: 'custom-order-container',
      position: {
        right: '0',
      },
    });
  }
}
