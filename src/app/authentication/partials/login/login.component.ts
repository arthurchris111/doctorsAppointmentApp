import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostLogin } from 'src/app/models/auth-models/post.model';
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
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.login;
    this.buildLoginForm();
    this.password = 'password';
  }

  togglePassword() {
    this.show = !this.show;
  }

  //login
  signIn() {
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
            result.username === this.login.value.username &&
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
  }

  onSubmit(postData: PostLogin) {
    this.submitted = true;
    this.isFetching = true;

    if (this.login.invalid) {
      return;
    } else {
      this.signIn();
    }
    console.log(this.login.value);
  }
}
