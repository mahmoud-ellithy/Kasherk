import { Routes } from '@angular/router';
import { authGuard } from '@abp/ng.core';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const PagesRoutes: Routes = [
  {
    path: 'settings',
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
        data: {
          title: 'Profile Settings',
          breadcrumb: true,
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Profile Settings' },
          ]
        },
        canActivate: [authGuard]
      }
    ]
  }
  // Add more page routes here as needed
];