import { Component, inject, Injector, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import {
  Validators,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@abp/ng.core';
import { getRedirectUrl } from '@abp/ng.account';

const { maxLength, required } = Validators;

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  options = this.settings.getOptions();
  protected injector = inject(Injector);
  protected fb = inject(UntypedFormBuilder);

  form!: UntypedFormGroup;

  constructor(
    private authService: AuthService,
    private settings: CoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  protected buildForm() {
    this.form = this.fb.group({
      username: ['', [required, maxLength(255)]],
      password: ['', [required, maxLength(128)]],
      rememberMe: [false],
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    const { username, password, rememberMe } = this.form.value;
    const redirectUrl = getRedirectUrl(this.injector);

    this.authService
      .login({
        username,
        password,
        rememberMe,
        redirectUrl,
      })
      .subscribe(res => {
        console.log(res);
      });

    // this.router.navigate(['/dashboards/dashboard1']);
  }
}
