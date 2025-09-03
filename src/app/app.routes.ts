import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { 
        path: 'home', loadComponent: () =>
        import('./components/home/home.component').then(m => m.HomeComponent)
     }, //component: HomeComponent
    { 
        path: 'about', loadComponent: () =>
        import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    { 
        path: 'contact-us', loadComponent: () => 
        // Lazy loading the ContactUsComponent
        // This is useful for larger applications to reduce initial load time
        import('./pages/contact-us/contact-us.component').then(m => m.ContactUsComponent) 
    },//component: ContactUsComponent
    {
        path: 'courses', loadComponent: () =>
        import('./pages/courses/courses.component').then(m => m.CoursesComponent)
    },    
    { path: '**', redirectTo: 'home'} // Wildcard route for a 404 page
];
