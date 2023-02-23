import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent, SidebarComponent],
  declarations: [ButtonComponent, SidebarComponent],
})
export class SharedModule {}
