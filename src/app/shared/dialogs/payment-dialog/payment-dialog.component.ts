import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalService } from 'src/app/services/local.service';
@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss'],
})
export class PaymentDialogComponent implements OnInit {
  buttonText: string = 'Make Payment';

  constructor(
    private dialogRef: MatDialogRef<PaymentDialogComponent>,
    private localService: LocalService
  ) {}

  ngOnInit() {}

  pay() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    cart.forEach((element: any) => {
      orders.push(element);
    });
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('orders', JSON.stringify(orders));
    this.localService.emitCartCountChange();
    this.localService.emitOrdersCountChange();
    this.dialogRef.close();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
