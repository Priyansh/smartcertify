import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  // commonModule : used for structural directives like *ngIf, *ngFor
  // RouterModule : used for routing
  //FormsModule : used of [(ngModel)] for two-way binding
  imports: [ RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {

  // ischecked: boolean = false;

}
