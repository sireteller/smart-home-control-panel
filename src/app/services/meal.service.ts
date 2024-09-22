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

  getMeal(id: number) {
    return this.http.get<Meal>(API.meals.meal(id));
  }

  getMeals(category: string): Observable<Meal[]> {
    return this.http.get<Meal[]>(API.meals.list, { 
      params: {
        category: category  
      }
    });
  }
}
