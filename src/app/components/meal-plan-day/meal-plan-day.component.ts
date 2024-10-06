import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MealPlanMealComponent } from '../meal-plan-meal/meal-plan-meal.component';
import { Meal, MealDragData, MealPlanDay, ScheduledMeal } from '../../models/food.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-plan-day',
  standalone: true,
  imports: [CommonModule, MealPlanMealComponent],
  templateUrl: './meal-plan-day.component.html',
  styleUrl: './meal-plan-day.component.css',
})
export class MealPlanDayComponent {
  @Input() mealPlanDay!: MealPlanDay;

  @Output() mealAdded = new EventEmitter<void>();

  meals: Meal[] = [];

  constructor(private mealService: MealService) {}

  onDragEnter(e: any) {
    e.preventDefault();
  }

  onDragOver(e: any) {
    e.preventDefault();
  }

  onDrop(e: any) {  
    const mealData: MealDragData = JSON.parse(e.dataTransfer.getData('application/json'));

    if (mealData.meal.id) {
      if (!this.mealPlanDay.meals.some(meal => meal.id === mealData.meal.id)) {
        this.mealService.scheduleMeal(mealData.meal.id, this.mealPlanDay.date).subscribe(() => {
          this.mealAdded.emit();
        });
      }
    }
  }
}
