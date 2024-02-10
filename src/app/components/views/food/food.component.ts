import { Component, Input } from '@angular/core';
import { MealPlanComponent } from '../../meal-plan/meal-plan.component';
import { MealCardSelectionBtnComponent } from '../../meal-card-selection-btn/meal-card-selection-btn.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MealPlanComponent, MealCardSelectionBtnComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  
}
