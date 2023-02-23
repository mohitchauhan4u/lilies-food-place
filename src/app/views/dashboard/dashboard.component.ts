import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName: string = 'User';
  dishData: any[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getDishData();
  }

  getDishData() {
    this.productService.getDishData().subscribe((data) => {
      this.dishData = data.dishData;
      console.log(this.dishData);
    });
  }
}
