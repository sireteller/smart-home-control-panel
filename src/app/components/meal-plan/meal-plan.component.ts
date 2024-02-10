import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatDate } from '@angular/common';
import { MealPlanDayComponent } from '../meal-plan-day/meal-plan-day.component';

@Component({
  selector: 'app-meal-plan',
  standalone: true,
  imports: [CommonModule, MealPlanDayComponent],
  templateUrl: './meal-plan.component.html',
  styleUrl: './meal-plan.component.css',
})
export class MealPlanComponent implements OnInit {
  days: any[] = [];

  ngOnInit() {
    const currentDate = new Date();

    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      const day = { weekday: formatDate(date, 'EEEE / dd MMM', 'en-EE') };

      this.days.push(day);
    }
  }
}
