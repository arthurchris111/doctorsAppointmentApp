import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login!: FormGroup;
  show: boolean = false;
  submitted: boolean = false;
  isFetching: boolean = false;
  user: boolean = false;
  password: any;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  buildLoginForm(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildLoginForm();
    this.password = 'password';
  }

  togglePassword() {
    this.show = !this.show;
    console.log(this.show);
  }

  onSubmit() {
    this.submitted = true;
    this.isFetching = true;

    if (this.login.invalid) {
      return;
    }

    console.log(this.login.value);
  }
}
