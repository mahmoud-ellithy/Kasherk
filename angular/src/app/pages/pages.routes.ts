import { Routes } from '@angular/router';
import { AppLoginComponent } from './authentication/login/login.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppLoginComponent,
    data: {
      title: 'Login',
      urls: [
        { title: 'Authentication', url: '/login' },
        { title: 'Login' },
      ],
    },
  },
  {
    path: 'login',
    component: AppLoginComponent,
    data: {
      title: 'Login',
      urls: [
        { title: 'Authentication', url: '/login' },
        { title: 'Login' },
      ],
    },
  },
];