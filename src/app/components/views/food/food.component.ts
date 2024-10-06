import { Component, ViewChild } from '@angular/core';
import { MealPlanComponent } from '../../meal-plan/meal-plan.component';
import { MealCardSelectionBtnComponent } from '../../meal-card-selection-btn/meal-card-selection-btn.component';
import { MealSelectionModalComponent } from '../../meal-selection-modal/meal-selection-modal.component';
import { CommonModule } from '@angular/common';
import { Meal } from '../../../models/food.model';
import { MealEditModal } from '../../meal-edit-modal/meal-edit-modal.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [
    CommonModule,
    MealPlanComponent,
    MealCardSelectionBtnComponent,
    MealSelectionModalComponent,
    MealEditModal,
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  openedModalName: string | null = null;
  editingMeal: Meal | null = null;

  @ViewChild(MealSelectionModalComponent)
  mealSelection!: MealSelectionModalComponent;

  openFoodModal($event: string) {
    this.openedModalName = $event;
  }

  closeFoodModal() {
    this.openedModalName = null;
  }

  openMealEditModal($event: Meal) {
    this.editingMeal = $event;
  }

  closeMealEditModal(updated: boolean) {
    this.editingMeal = null;
    if (updated && this.mealSelection) {
      this.mealSelection.loadMeals();
    }
  }
}
