import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectricityData } from "../models/electricity.model";
import { API } from '../api';

@Injectable({
    providedIn: 'root'
})
export class ElectricityService {

    constructor(private http: HttpClient) {
    }

    getElectricityData(): Observable<ElectricityData> {
        return this.http.get<ElectricityData>(API.electricity.data);
    }

}
