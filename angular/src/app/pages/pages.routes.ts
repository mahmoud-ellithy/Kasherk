import { Routes } from '@angular/router';
import { authGuard } from '@abp/ng.core';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'account/profile',
        component: UserProfileComponent,
        data: {
          title: 'Account Settings',
          breadcrumb: true,
        },
        canActivate: [authGuard]
      }
    ]
  }
  // Add more page routes here as needed
];