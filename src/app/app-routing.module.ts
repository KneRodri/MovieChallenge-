import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details/movie-details.component';

const routes: Routes = [

  { path: '', redirectTo: 'app-home', pathMatch: 'full'},
  { path: 'app-home', component: HomeComponent },
  { path: 'app-movie-details', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
