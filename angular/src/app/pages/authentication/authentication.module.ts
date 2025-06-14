import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@abp/ng.core';
import { ACCOUNT_CONFIG_OPTIONS, AccountModule } from '@abp/ng.account';

const routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    MaterialModule,
    // AccountModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    {
      provide: ACCOUNT_CONFIG_OPTIONS,
      useValue: {
        redirectUrl: '/',  // or your desired redirect URL after login
        loginUrl: '/account/login'
      }
    }
  ]
})
export class AuthenticationModule {}
