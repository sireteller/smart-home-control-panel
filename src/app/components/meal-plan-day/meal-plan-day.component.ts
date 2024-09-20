import { Component, Input } from '@angular/core';
import { MealPlanMealComponent } from "../meal-plan-meal/meal-plan-meal.component";

@Component({
  selector: 'app-meal-plan-day',
  standalone: true,
  imports: [MealPlanMealComponent],
  templateUrl: './meal-plan-day.component.html',
  styleUrl: './meal-plan-day.component.css'
})
export class MealPlanDayComponent {
  @Input() weekday!: string;
}
