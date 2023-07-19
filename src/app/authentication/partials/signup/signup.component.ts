import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signup!: FormGroup;
  show: boolean = false;
  submitted: boolean = false;
  isFetching: boolean = false;
  user: boolean = false;
  password: any;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  buildLoginForm(): void {
    this.signup = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
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

    if (this.signup.invalid) {
      return;
    }

    console.log(this.signup.value);
  }
}
