import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usercrud-formgroup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usercrud-formgroup.component.html',
  styleUrl: './usercrud-formgroup.component.css'
})
export class UsercrudFormgroupComponent implements OnInit {
  protected http = inject(HttpClient);
  protected userForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),

  });
  protected userAll: any[] = [];
  protected base_URL = "https://jsonplaceholder.typicode.com";

  async ngOnInit() {
    this.onGetUserAll();
  }
  onGetUserAll() {
    this.http.get(this.base_URL + '/users').subscribe({
      next: (users: any) => {
        this.userAll = users;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  onEditUser(id: number) {
    this.http.get(this.base_URL + '/users/' + id).subscribe((user: any) => {
      this.userForm = new FormGroup({
        id: new FormControl(user.id),
        name: new FormControl(user.name),
        username: new FormControl(user.username),
        email: new FormControl(user.email),
      });
    })
  }
  onSubmitUsers() {
    var userData = this.userForm.value;
    this.http.post(this.base_URL + '/users', userData).subscribe({
      next: (data) => {
        alert('User created successfully!');
        this.userForm.reset();
      },
      error: (error) => {
        console.error('Error creating user:', error);
        alert('Error creating user. Please try again.');
      }
    });
    this.onGetUserAll();
  }

  onClear(){
    this.userForm.reset();
  }
}
