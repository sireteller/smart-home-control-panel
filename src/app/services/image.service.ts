import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  uploadImage(imageFormData: FormData): Observable<any> {
    return this.http.post<any>(API.image.upload, imageFormData); 
  }
}
