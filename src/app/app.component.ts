import { Component, inject, Injectable, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from "./pages/header/header.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  // We don't need specify home component, about, contact us etc since it is now part of RouterOutlet
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

  
export class AppComponent implements OnInit {

  private httpClient = inject(HttpClient) // Injecting HttpClient for making HTTP requests
  private loggerService = inject(LoggerService); // Injecting LoggerService for logging
  title = 'smartcertify';
  protected members = signal<any>([]);
  async ngOnInit() {
    this.members.set(await this.getMembers());
    // this.httpClient.get('https://jsonplaceholder.typicode.com/posts/')
    //                .subscribe({
    //                           next: responseData => this.members.set(responseData),
    //                           error: (error) => {
    //                             console.error('Error occurred:', error);
    //                             console.error('Error details:', error.message);
    //                           },
    //                           complete: () => console.log('Request completed')
    //                         })
    
    this.loggerService.log('AppComponent initialized and members fetched successfully.');
  }
  async getMembers(){
    try
    {
      // You can use either firstValueFrom or lastValueFrom based on your preference
       return await lastValueFrom(this.httpClient.get('https://jsonplaceholder.typicode.com/posts/'));
    }
    catch(error) {
      console.error('Error fetching members:', error);
      throw error;
    }
  }
}
