import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { ShoppingListItem } from '../models/shopping-list.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor(private http: HttpClient) {}

  getList(): Observable<ShoppingListItem[]> {
    return this.http.get<ShoppingListItem[]>(API.anylist.base);
  }

  getRecent(): Observable<ShoppingListItem[]> {
    return this.http.get<ShoppingListItem[]>(API.anylist.recent);
  }

  addItem(name: string): Observable<void> {
    return this.http.post<void>(API.anylist.base, { name });
  }

  deleteItem(identifier: string): Observable<void> {
    return this.http.delete<void>(API.anylist.id(identifier));
  }

}
