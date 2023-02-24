import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartDialogComponent } from 'src/app/shared/dialogs/add-to-cart-dialog/add-to-cart-dialog.component';
import { CartDialogComponent } from 'src/app/shared/dialogs/cart-dialog/cart-dialog.component';
import { OrderDialogComponent } from 'src/app/shared/dialogs/order-dialog/order-dialog.component';

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
      console.log(this.dishData);
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
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.cartUpdated) {
        console.log('Dialog was closed with result:', result);
      }
    });
  }

  openCartDialog() {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      panelClass: 'custom-cart-container',
      position: {
        right: '0',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  openOrderDialog() {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      panelClass: 'custom-order-container',
      position: {
        right: '0',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog was closed with result:', result);
    });
  }
}
