import { NgModule, APP_INITIALIZER, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ContentAnimateDirective } from './directives/content-animate.directive';
import { TranslateService } from './services/translate.service';

export function setupTranslateFactory(service: TranslateService): Function {
	return () => service.use('en');
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		NgbModule,
	],
	declarations: [
		HeaderComponent,
		FooterComponent,
		PageNotFoundComponent,
		MakePaymentComponent,
		ContactusComponent,
		HomeComponent,
		AboutusComponent,
		TranslatePipe,
		NavbarComponent,
		SidebarComponent,
		SpinnerComponent,
		ContentAnimateDirective
	],
	exports: [
		FormsModule,
		FormsModule,
		RouterModule,
		HeaderComponent,
		FooterComponent,
		PageNotFoundComponent,
		ContactusComponent,
		HomeComponent,
		TranslatePipe,
		NavbarComponent,
		SidebarComponent,
		SpinnerComponent,
		ContentAnimateDirective
	],
	providers: [
		TranslateService,
		{
			provide: APP_INITIALIZER,
			useFactory: setupTranslateFactory,
			deps: [ TranslateService ],
			multi: true
		}
	],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
