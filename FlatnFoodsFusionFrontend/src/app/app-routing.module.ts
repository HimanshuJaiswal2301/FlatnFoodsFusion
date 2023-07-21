import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './city/dashboard/dashboard.component';
import { FlatComponent } from './flat/flat.component';
import { AddFlatComponent } from './flat/add-flat/add-flat.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  {path: 'city' , component: DashboardComponent},
    {path: 'add-flat' , component: AddFlatComponent},
  {path: 'flat' , component: FlatComponent,
    
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
