import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { ShoppingListCategory } from '../models/shopping-list.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  constructor(private http: HttpClient) {}

  getList(): Observable<ShoppingListCategory[]> {
    return this.http.get<ShoppingListCategory[]>(API.shoppinglist.list);
  }

  getRecent(): Observable<any[]> {
    return this.http.get<any[]>(API.anylist.recent);
  }
}
