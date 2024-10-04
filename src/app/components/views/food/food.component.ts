import { Component, OnInit, ViewChild } from '@angular/core';
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
export class FoodComponent implements OnInit {
  openedModalName: string | null = null;
  editingMeal: Meal | null = null;
  showTrashcan: boolean = false;
  trashDragOver: boolean = false;

  @ViewChild(MealSelectionModalComponent)
  mealSelection!: MealSelectionModalComponent;

  ngOnInit() {
    // TODO clean up listeners - remove on disconnect
    window.addEventListener('dragstart', this.onDragStart.bind(this));
    window.addEventListener('dragend', this.onDragEnd.bind(this));
  }

  onDragStart() {
    this.showTrashcan = true;
  }

  onDragEnd() {
    this.showTrashcan = false;
  }

  // TODO make new trash component
  // TODO leave animation
  trashOnDragEnter(e: any) {
    e.preventDefault();
    this.trashDragOver = true;
  }

  trashOnDragOver(e: any) {
    e.preventDefault();
  }

  trashOnDragLeave() {
    this.trashDragOver = false;
  }

  trashOnDrop(e: any) {
    e.preventDefault();
    this.trashDragOver = false;
    this.showTrashcan = false;
  }

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
