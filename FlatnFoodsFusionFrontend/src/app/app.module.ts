import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './pages/signup/signup.component';
import { FlatComponent } from './flat/flat.component';
import { DashboardComponent } from './city/dashboard/dashboard.component';
import { SidebarComponent } from './city/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { SubflatComponent } from './subflat/subflat.component';
import { AddFlatComponent } from './flat/add-flat/add-flat.component';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio'; 
import { FilterPipe } from './filter.pipe';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimeAgoPipe } from './time-ago.pipe';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FlatComponent,
    DashboardComponent,
    SidebarComponent,
    SubflatComponent,
    AddFlatComponent,
    FilterPipe,
    TimeAgoPipe,
    AboutusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    
    
  
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['example.com'],
        disallowedRoutes: ['example.com/examplebadroute/'],
      },
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
