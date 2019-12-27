import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
  SignupComponent,
  SigninComponent],
  imports: [
    AuthRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports: [
 
],
providers:[

]
})
export class AuthModule { }
