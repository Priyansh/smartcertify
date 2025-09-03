import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Courses } from '../pages/Models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  protected http = inject(HttpClient);
  protected apiUrl: string = 'https://smartcertify-api.azurewebsites.net/api/'; // Replace with your actual API endpoint
  
   get_Courses(): Observable<Courses[]>{
      // return await lastValueFrom(this.http.get<any[]>(this.apiUrl + 'courses'));
      return this.http.get<Courses[]>(this.apiUrl + 'courses');
    }
}
