import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-plan-meal',
  standalone: true,
  imports: [],
  templateUrl: './meal-plan-meal.component.html',
  styleUrl: './meal-plan-meal.component.css',
})
export class MealPlanMealComponent {
  @Input() mealTitle!: string;
  @Input() mealBgImg!: string;
}
