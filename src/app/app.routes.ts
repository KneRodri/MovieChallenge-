import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/app-home', pathMatch: 'full'},
    { path: 'app-home', component: HomeComponent },
    { path: 'app-movie-details/:id', component: MovieDetailsComponent },
];
