import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-plan-day',
  standalone: true,
  imports: [],
  templateUrl: './meal-plan-day.component.html',
  styleUrl: './meal-plan-day.component.css'
})
export class MealPlanDayComponent {
  @Input() weekday!: string;
}
