import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  userId: number = 0;
  constructor( private fb: FormBuilder ) {
      this.contactForm = this.fb.group(
        {
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          subject: ['', Validators.required],
          message: ['', Validators.required],
        });
    }
    triggerError() {
      // Simulate a non-HTTP error
      throw new Error('This is a simulated error');
    }

  onSubmit() {
    if (this.contactForm.valid) 
    {
      console.log('Form Submitted!', this.contactForm.value);
      // Reset the form after submission
      this.contactForm.reset();
    }
  }
}
