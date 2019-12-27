import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ContactusComponent } from './shared/components/contactus/contactus.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutusComponent } from './shared/components/aboutus/aboutus.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full"
  },

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },

  {
    path: "aboutus",
    component: AboutusComponent
  },

  {
    path: "mediShop",
    loadChildren: "src/app/MediShop/medishop.module#MediShopModule"
  },

  {
    path: "auth",
    loadChildren: "src/app/Auth/auth.module#AuthModule"
  },

  {
    path: "hospital",
    loadChildren: "src/app/Hospital/hospital.module#HospitalModule"
  },


  {
    path: "admin",
    loadChildren: "src/app/Admin/admin.module#AdminModule"
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
