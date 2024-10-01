import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { Meal } from '../models/food.model';

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
}
