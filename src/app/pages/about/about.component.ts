import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  //template: `<h2>Priyansh, how are in About</h2>`,
  styleUrl: './about.component.css'
})
export class AboutComponent {
   title : string = 'About Page';
}
