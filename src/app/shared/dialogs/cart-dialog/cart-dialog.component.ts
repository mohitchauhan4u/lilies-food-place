import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss'],
})
export class CartDialogComponent implements OnInit {
  cart: any;
  totalPrice: number = 0;
  buttonText: string = 'Checkout';

  constructor(
    private dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private localService: LocalService
  ) {
    this.cart = data;
  }

  ngOnInit() {
    this.getTotalPrice();
  }

  getTotalPrice() {
    let cost = 0;
    this.cart.forEach((item: any) => {
      cost += item.quantity * item.dish.price;
    });
    this.totalPrice = cost;
  }

  checkout() {
    this.dialogRef.close({ checkout: true });
  }

  removeItemFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.localService.emitCartCountChange();
    this.getTotalPrice();
  }

  closeDialog() {
    this.dialogRef.close({ checkout: false });
  }
}
