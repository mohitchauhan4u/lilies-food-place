import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-add-to-cart-dialog',
  templateUrl: './add-to-cart-dialog.component.html',
  styleUrls: ['./add-to-cart-dialog.component.scss'],
})
export class AddToCartDialogComponent implements OnInit {
  dish: any;
  dishCount: number = 1;

  constructor(
    private dialogRef: MatDialogRef<AddToCartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private localService: LocalService
  ) {
    this.dish = data;
  }

  ngOnInit() {}

  addToCart() {
    this.updateCart();
    this.localService.emitCartCountChange();
    this.dialogRef.close();
  }

  updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let index = -1;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].dish.name == this.dish.name) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      const obj = cart[index];
      obj.quantity = obj.quantity + this.dishCount;
    } else {
      const obj = { quantity: this.dishCount, dish: this.dish };
      cart.push(obj);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
