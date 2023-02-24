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

  constructor(
    private dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private localService: LocalService
  ) {
    this.cart = data;
  }

  ngOnInit() {}

  checkout() {
    this.dialogRef.close({ checkout: true });
  }

  removeItemFromCart() {
    this.localService.emitCartCountChange();
  }

  closeDialog() {
    this.dialogRef.close({ checkout: false });
  }
}
