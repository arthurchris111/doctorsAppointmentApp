import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './partials/login/login.component';
import { SignupComponent } from './partials/signup/signup.component';
import { AuthenticationComponent } from './authentication.component';
@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthenticationComponent],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule],
})
export class AuthenticationModule {}
