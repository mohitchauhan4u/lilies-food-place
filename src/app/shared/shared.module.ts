import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DishCardComponent } from './dish-card/dish-card.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatTooltipModule],
  exports: [ButtonComponent, SidebarComponent, DishCardComponent],
  declarations: [ButtonComponent, SidebarComponent, DishCardComponent],
})
export class SharedModule {}
