import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CentresComponent } from './components/centres/centres.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EconomicaComponent } from './components/economica/economica.component';
import { JuguetesComponent } from './components/juguetes/juguetes.component';
import { CentresDetailsComponent } from './components/centres-details/centres-details.component';


import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './signup/signup.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'centres', component: CentresComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'economica', component: EconomicaComponent },
  { path: 'juguetes', component: JuguetesComponent },
  { path: 'centres/:id', component: CentresDetailsComponent },

  { path: 'login-form', component: LoginFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
