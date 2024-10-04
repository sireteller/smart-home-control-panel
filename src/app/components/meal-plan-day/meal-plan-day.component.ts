import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MealPlanMealComponent } from '../meal-plan-meal/meal-plan-meal.component';
import { Meal } from '../../models/food.model';

@Component({
  selector: 'app-meal-plan-day',
  standalone: true,
  imports: [CommonModule, MealPlanMealComponent],
  templateUrl: './meal-plan-day.component.html',
  styleUrl: './meal-plan-day.component.css',
})
export class MealPlanDayComponent {
  @Input() weekday!: string;

  meals: Meal[] = [];

  onDragEnter(e: any) {
    e.preventDefault();
  }

  onDragOver(e: any) {
    e.preventDefault();
  }

  onDrop(e: any) {
    const newMeal = JSON.parse(e.dataTransfer.getData('application/json'));

    if (this.meals.find((meal) => meal.id === newMeal.id)) {
      return;
    }

    this.meals.push(newMeal);
  }
}
