import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { services } from 'src/app/service/services';

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

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: services
  ) {}

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
  }

  onSubmit() {
    this.submitted = true;
    this.isFetching = true;

    this.service.loginDetails().subscribe({
      next: (responseData: any) => {
        this.isFetching = false;
        const userArray = [];

        for (const key in responseData) {
          console.log(responseData[key]);
          userArray.push(responseData[key]);
        }

        const user = userArray.find((result: any) => {
          return (
            result.email === this.login.value.email &&
            result.password === this.login.value.password
          );
        });

        if (user) {
          this.route.navigate(['home']);
          alert('Login Successfully');
        } else {
          alert('user not found');
        }
      },
    });

    if (this.login.invalid) {
      return;
    }

    console.log(this.login.value);
  }
}
