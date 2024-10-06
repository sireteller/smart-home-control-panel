import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { Meal, MealPlanDay, ScheduledMeal } from '../models/food.model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}

  getMeal(id: number): Observable<Meal> {
    return this.http.get<Meal>(API.meals.mealId(id));
  }

  getMeals(category: string): Observable<Meal[]> {
    return this.http.get<Meal[]>(API.meals.meals, { 
      params: {
        category: category  
      }
    });
  }

  saveMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(API.meals.meals, meal); 
  }

  deleteMeal(id: number): Observable<void> {
    return this.http.delete<void>(API.meals.mealId(id)); 
  }

  getMealPlan(from: Date, to: Date): Observable<MealPlanDay[]> {
    return this.http.get<MealPlanDay[]>(API.meals.mealPlan(), { 
      params: {
        from: formatDate(from, 'yyyy-MM-dd', 'en-EE'),
        to: formatDate(to, 'yyyy-MM-dd', 'en-EE')
      }
    })
  }

  scheduleMeal(mealId: number, date: Date) {
    return this.http.post(API.meals.scheduleMeal(mealId), undefined, { 
      params: {
        date: formatDate(date, 'yyyy-MM-dd', 'en-EE'),
      }
    });
  }

  deleteScheduledMeal(scheduleId: number) {
    return this.http.delete(API.meals.scheduleMeal(scheduleId));
  }
}
