import { Component } from '@angular/core';
import { MealPlanComponent } from '../../meal-plan/meal-plan.component';
import { MealCardSelectionBtnComponent } from '../../meal-card-selection-btn/meal-card-selection-btn.component';
import { FoodModalComponent } from '../../meal-selection-modal/meal-selection-modal.component';
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
    FoodModalComponent,
    MealEditModal,
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  openedModalName: string | null = null;
  editingMeal: Meal | null = null;

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
    if (updated) {
      // TODO refresh food modal instead of close somehow
      this.closeFoodModal();
    }
  }
}
