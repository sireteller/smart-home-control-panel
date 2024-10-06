import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlanDayComponent } from '../meal-plan-day/meal-plan-day.component';
import { MealPlanDay } from '../../models/food.model';
import { MealService } from '../../services/meal.service';
import { MealTrashBinComponent } from "../meal-trash-bin/meal-trash-bin.component";

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [CommonModule, MealPlanDayComponent, MealTrashBinComponent],
  templateUrl: './meal-plan.component.html',
  styleUrl: './meal-plan.component.css',
})
export class MealPlanComponent implements OnInit {
  
  startDate: Date;
  endDate: Date;
  mealPlan: MealPlanDay[] = [];

  constructor(private mealService: MealService) {
    this.startDate = new Date();
    this.endDate = new Date();
    this.endDate.setDate(this.startDate.getDate() + 7);
  }

  ngOnInit() {
    this.loadMealPlan();
  }

  loadMealPlan() {
    this.mealService.getMealPlan(this.startDate, this.endDate).subscribe((result) => this.mealPlan = result);
  }

}
