import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routes

import { APP_ROUTING } from './app.routes';

// services
import { HeroesService } from '../services/heroes.service';

// components
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from '../services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { CentresComponent } from './components/centres/centres.component';
import { TwoButtonLinkComponent } from './components/shared/two-button-link/two-button-link.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    CentresComponent,
    TwoButtonLinkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [AuthService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
