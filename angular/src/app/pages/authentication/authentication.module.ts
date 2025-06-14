import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
