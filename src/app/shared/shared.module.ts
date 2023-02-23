import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DishCardComponent } from './dish-card/dish-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddToCartDialogComponent } from './dialogs/add-to-cart-dialog/add-to-cart-dialog.component';
import { CartDialogComponent } from './dialogs/cart-dialog/cart-dialog.component';
import { OrderDialogComponent } from './dialogs/order-dialog/order-dialog.component';
import { PaymentDialogComponent } from './dialogs/payment-dialog/payment-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [
    ButtonComponent,
    SidebarComponent,
    DishCardComponent,
    AddToCartDialogComponent,
    CartDialogComponent,
    OrderDialogComponent,
    PaymentDialogComponent,
  ],
  declarations: [
    ButtonComponent,
    SidebarComponent,
    DishCardComponent,
    AddToCartDialogComponent,
    CartDialogComponent,
    OrderDialogComponent,
    PaymentDialogComponent,
  ],
})
export class SharedModule {}
