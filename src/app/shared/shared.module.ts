import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
		NgbModule,
	],
	declarations: [
		FooterComponent,
		PageNotFoundComponent,
		NavbarComponent,
		SidebarComponent,
	],
	exports: [
		FormsModule,
		FormsModule,
		RouterModule,
		FooterComponent,
		PageNotFoundComponent,
		NavbarComponent,
		SidebarComponent,
	],
	providers: [
	],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
