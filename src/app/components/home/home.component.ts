import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  // FormsModule : used of [(ngModel)] for two-way binding
  // CommonModule : used for structural directives like *ngIf, *ngFor
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  // Interpolation example
  firstName: string = 'Priyansh';
  lastName: string = "shah";
  itemCount : number = 10;
  price : number = 100;
  quantity : number = 2;

  // Property Binding example
  isDisabled: boolean = true;
  imageUrl: string = 'https://smartlearnbykarthik.azurewebsites.net/assets/android-chrome-512x512.png';
  isActive: boolean = false;


  // Event Binding example
  clickMessage: string = '';
  inputMessage: string = '';
  message: string = '';

  // Event handler for button click
  handleClick() {
    this.clickMessage = 'Button Clicked!';
  }
  onInputChange(event: any) {
    this.inputMessage = event.target.value; 
  }
  onMouseOver() {
    this.message = 'Mouse is over the component!'; 
  }
onMouseLeave() {
    this.message = 'Mouse is Leave the component!'; 
  }
  
  // Two-way Binding example
  username: string = 'Priyansh';
  isChecked: boolean = false;
  selectedOption: string = 'option3';

  // Structural Directives example
  isLoggedIn : boolean = false;
}
