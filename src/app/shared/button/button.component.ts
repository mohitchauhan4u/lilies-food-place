import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string = 'SUBMIT';
  @Output() buttonClicked = new EventEmitter<void>();

  ngOnInit(): void {}

  emitButtonClicked() {
    this.buttonClicked.emit();
  }
}
