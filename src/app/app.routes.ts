import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];
