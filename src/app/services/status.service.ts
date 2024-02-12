import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';

@Injectable({
    providedIn: 'root'
})
export class StatusService {
  
    constructor(private http: HttpClient) {
    }

    checkStatus(): Observable<any> {
        return this.http.get(API.status);
    }

}