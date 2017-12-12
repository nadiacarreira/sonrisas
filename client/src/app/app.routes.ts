import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CentresComponent } from './components/centres/centres.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EconomicaComponent } from './components/economica/economica.component';
import { JuguetesComponent } from './components/juguetes/juguetes.component';
import { CentresDetailsComponent } from './components/centres-details/centres-details.component';
import { EditCentresComponent } from './components/edit-centres/edit-centres.component';
import { EditHeroesComponent } from './components/edit-heroes/edit-heroes.component';
import { VoluntarioComponent } from './components/voluntario/voluntario.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
// import { ChatComponent } from './components/chat/chat.component';





const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'centres', component: CentresComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'edit-heroes/:id', component: EditHeroesComponent },  
  { path: 'economica', component: EconomicaComponent },
  { path: 'juguetes', component: JuguetesComponent },
  { path: 'voluntario', component: VoluntarioComponent },
  { path: 'centres/:id', component: CentresDetailsComponent },
  { path: 'centres/edit-centres', component: EditCentresComponent },

  // { path: 'chat', component: ChatComponent },

  { path: 'login-form', component: LoginFormComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile/edit-profile', component: EditProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
