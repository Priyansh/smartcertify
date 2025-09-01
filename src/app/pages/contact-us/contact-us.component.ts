import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  formValidity = signal(false);
  constructor( private fb: FormBuilder ) {
      this.contactForm = this.fb.group(
        {
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          subject: ['', Validators.required, Validators.minLength(5)],
          message: ['', Validators.required, Validators.minLength(10)],
        });

        this.contactForm.statusChanges.subscribe(status => {
          this.formValidity.set(status === 'VALID');
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
