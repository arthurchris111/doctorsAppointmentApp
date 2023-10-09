import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './partials/login/login.component';
import { SignupComponent } from './partials/signup/signup.component';
import { AuthenticationComponent } from './authentication.component';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [LoginComponent, SignupComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDxV9hEBX1e4kRrdyqBomyL0TT0wYTwpP4',
      authDomain: 'doctor-s-appointments.firebaseapp.com',
      databaseURL: 'https://doctor-s-appointments-default-rtdb.firebaseio.com',
      projectId: 'doctor-s-appointments',
      storageBucket: 'doctor-s-appointments.appspot.com',
      messagingSenderId: '672588399008',
      appId: '1:672588399008:web:2ee5a3750d46bd5b4c64c5',
    }),
  ],
})
export class AuthenticationModule {}
