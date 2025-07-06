import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';

@Injectable({
    providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) {
  }

  get(key: string): Observable<string> {
    return this.http.get<string>(API.settings.key(key));
  }

  set(key: string, value: string): Observable<void> {
    return this.http.put<void>(API.settings.key(key), value);
  }

}
