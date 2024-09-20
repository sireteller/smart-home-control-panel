import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';

@Injectable({
    providedIn: 'root'
})
export class ShoppinglistService {
  
    constructor(private http: HttpClient) {
    }

    getList(): Observable<any> {
        return this.http.get(API.shoppinglist.list);
    }

}