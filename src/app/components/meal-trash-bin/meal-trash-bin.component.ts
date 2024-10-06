import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlanDayComponent } from '../meal-plan-day/meal-plan-day.component';
import { MealDragData, MealPlanDay, ScheduledMeal } from '../../models/food.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-trash-bin',
  standalone: true,
  imports: [CommonModule, MealPlanDayComponent],
  templateUrl: './meal-trash-bin.component.html',
  styleUrl: './meal-trash-bin.component.css',
})
export class MealTrashBinComponent implements OnInit {
  
  @Output() mealTrashed = new EventEmitter<void>();

  showTrashcan: boolean = false;
  trashDragOver: boolean = false;

  mealPlan: MealPlanDay[] = [];

  constructor(private mealService: MealService) {}

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
    const mealData: MealDragData = JSON.parse(e.dataTransfer.getData('application/json'));
    console.log(mealData);
    
    if (mealData.scheduledMealId) {
      this.mealService.deleteScheduledMeal(mealData.scheduledMealId).subscribe(() => {
          this.mealTrashed.emit();
      });
    }

  }

}
