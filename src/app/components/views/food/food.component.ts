import { Component, Input } from '@angular/core';
import { MealPlanComponent } from '../../meal-plan/meal-plan.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MealPlanComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {}
