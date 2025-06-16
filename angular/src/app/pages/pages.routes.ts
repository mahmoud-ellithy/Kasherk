import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const PagesRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent
  }
];