import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Meal } from '../../models/food.model';


@Component({
  selector: 'app-meal-plan-meal',
  standalone: true,
  imports: [],
  templateUrl: './meal-plan-meal.component.html',
  styleUrl: './meal-plan-meal.component.css',
})
export class MealPlanMealComponent {
  @Input() meal!: Meal;
  @Output() clicked = new EventEmitter<Meal>();

  handleClick() {
    this.clicked.emit(this.meal);
  }

  getFullImageURL() {
    if (this.meal.mealImageUrl && this.meal.mealImageUrl.startsWith('/')) {  
      return environment.apiBaseUrl + this.meal.mealImageUrl;
    }
    return this.meal.mealImageUrl;
  }
}
