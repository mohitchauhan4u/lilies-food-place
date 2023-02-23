import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { DishCardComponent } from './dish-card/dish-card.component';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent, SidebarComponent, DishCardComponent],
  declarations: [ButtonComponent, SidebarComponent, DishCardComponent],
})
export class SharedModule {}
