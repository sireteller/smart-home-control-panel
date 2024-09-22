import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meal-card-selection-btn',
  standalone: true,
  imports: [],
  templateUrl: './meal-card-selection-btn.component.html',
  styleUrl: './meal-card-selection-btn.component.css'
})
export class MealCardSelectionBtnComponent {

  @Input() cardTitle!: string;
  @Output() clicked = new EventEmitter<string>();

  handleClick() {
    this.clicked.emit(this.cardTitle);
  }
  
}
