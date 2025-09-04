import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usercrud-formgroup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './usercrud-formgroup.component.html',
  styleUrl: './usercrud-formgroup.component.css'
})
// REFERENCE : https://www.youtube.com/watch?v=dlNY-eQOZ5s
//RESOURCES : https://www.youtube.com/watch?v=PjMqb6tonqk&list=PL7JmcZV0UQtV2QuJXflBHWsS1pgYDyuC0&index=16
// Testing API: https://freeprojectapi.com/ has all CRUD API call (i.e https://api.freeprojectapi.com/api/GoalTracker/getAllUsers)
// Fake API : https://jsonplaceholder.typicode.com/users
export class UsercrudFormgroupComponent implements OnInit {
  protected http = inject(HttpClient);
  protected userForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),

  });
  protected userAll: any[] = [];
  protected hasEdit = signal(false);
  protected userId = signal(0);
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

  onEditUser(user: any) {
    /* this.http.get(this.base_URL + '/users/' + id).subscribe((user: any) => {
      this.userForm = new FormGroup({
        id: new FormControl(user.id),
        name: new FormControl(user.name),
        username: new FormControl(user.username),
        email: new FormControl(user.email),
      });
      this.userId.set(id);
      this.hasEdit.set(true);
    }) */
    this.userForm = new FormGroup({
      id: new FormControl(user.id),
      name: new FormControl(user.name),
      username: new FormControl(user.username),
      email: new FormControl(user.email),
    });
    this.userId.set(user.id);
    this.hasEdit.set(true);
  }

  onUpsertUsers() {
    var userData = this.userForm.value;
    if (!this.hasEdit()) {
      this.http.post(this.base_URL + '/users', userData).subscribe({
        next: (data) => {
          alert('User created successfully!');
          this.userForm.reset();
        },
        error: (error) => {
          console.error('Error creating user:', error.error);
          alert('Error creating user:' + error.error);
        }
      });
    }
    else {
      // Call update form
      console.log(`In Update and see updated User Id : ${this.userId()}`);
      this.http.put(this.base_URL + '/users/' + this.userId(), userData).subscribe({
        next: (data) => {
          alert('User updated successfully!');
          this.userForm.reset();
        },
        error: (error) => {
          console.error('Error updating user:', error.error);
          alert('Error updating user: ' + error.error);
        }
      });

    }

    //after submit ,let's repopulate table by calling GetUserAll and Reset form(or clean up)
    this.onGetUserAll();
    this.onClear();

  }

  onDeleteUser(id: number) {
    var hasDeleteRequested: Boolean = confirm("Are you sure you want to Delete ?");
    if (hasDeleteRequested) {
      this.http.delete(this.base_URL + '/users/' + id).subscribe({
        next: (data) => {
          alert('User deleted successfully!');
          this.onGetUserAll();
        },
        error: (error) => {
          alert('Error deleting user: ' + error.error);
        }
      });
    }

  }

  onClear() {
    this.hasEdit.set(false);
    this.userId.set(0);
    this.userForm.reset();
  }
}
