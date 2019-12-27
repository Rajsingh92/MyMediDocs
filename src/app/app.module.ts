import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SharedModule } from './shared/shared.module';
import { MediShopModule } from './MediShop/medishop.module';
import { HospitalModule } from './Hospital/hospital.module';
import { AdminModule } from './Admin/admin.module';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { AuthModule } from './Auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './shared/modules/theme/theme.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    LanguageTranslationModule,
    NgbModule,
    ThemeModule ,
    
    AdminModule ,
    HospitalModule,
    MediShopModule, 
    SharedModule ,
    AuthModule,
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
