import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit {
  @Input() dish: any;
  @Output() addToCartClicked = new EventEmitter();

  ngOnInit(): void {}

  addToCart() {
    this.addToCartClicked.emit();
  }
}
