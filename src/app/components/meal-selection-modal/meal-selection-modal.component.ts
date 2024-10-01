import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../../models/food.model';
import { MealPlanMealComponent } from '../meal-plan-meal/meal-plan-meal.component';
import { MealService } from '../../services/meal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-selection-modal',
  standalone: true,
  imports: [CommonModule, MealPlanMealComponent],
  templateUrl: './meal-selection-modal.component.html',
  styleUrl: './meal-selection-modal.component.css',
})
export class FoodModalComponent implements OnInit {
  @Input() title!: string;
  @Output() modalClosed = new EventEmitter<void>();
  @Output() modalEditOpened = new EventEmitter<Meal>();

  meals!: Meal[];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getMeals(this.title).subscribe((meals) => {
      this.meals = meals;
    });
  }

  openMealEditModal(meal?: Meal) {
    if (meal) {
      this.modalEditOpened.emit(meal);
    } else {
      this.modalEditOpened.emit({ name: '', category: this.title });
    }
  }

  closeModal() {
    this.modalClosed.emit();
  }
}
