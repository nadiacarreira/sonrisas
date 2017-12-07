import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routes

import { APP_ROUTING } from './app.routes';

// services
import { HeroesService } from '../services/heroes.service';
import { CentreService } from '../services/centres.service';


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
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EconomicaComponent } from './components/economica/economica.component';
import { JuguetesComponent } from './components/juguetes/juguetes.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { MarkerManager } from '@agm/core';
import { CentresDetailsComponent } from './components/centres-details/centres-details.component';


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
    ProfileComponent,
    EditProfileComponent,
    EconomicaComponent,
    JuguetesComponent,
    HeroDetailsComponent,
    MapComponent,
    CentresDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKH84vXMFj4mYyrcEgFydn7EQGzmZYKq0'
    })
  ],
  providers: [AuthService,
              HeroesService,
              CentreService,
              MarkerManager
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
