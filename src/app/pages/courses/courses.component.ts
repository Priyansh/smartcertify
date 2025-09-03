import { Component, inject, OnInit, signal } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Courses } from '../Models/courses';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  protected courses : Courses[] = [];
  //protected courses = signal<Courses[]>([]);
  //protected courses = signal<any>([]);
  protected courseService = inject(CoursesService);

  async ngOnInit() {
    this.loadCourses();
  }
  loadCourses() {
    this.courseService.get_Courses().subscribe({
      next: (data) => {
        this.courses = data;
        // this.courses.set(data);
        console.log('Courses loaded:', data);
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      }
    });
    // this.courses.set(await this.courseService.getCourses());
  }

}
