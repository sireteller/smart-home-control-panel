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

  saveMeal(mealFormData: FormData): Observable<void> {
    return this.http.post<void>(API.meals.meals, mealFormData); 
  }
}
