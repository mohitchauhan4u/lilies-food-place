import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.dish = data;
  }

  ngOnInit() {
    console.log(this.dish);
  }

  addToCart() {
    this.dialogRef.close({ cartUpdated: true });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
