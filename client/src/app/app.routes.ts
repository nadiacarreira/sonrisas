import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CentresComponent } from './components/centres/centres.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'centres', component: CentresComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
