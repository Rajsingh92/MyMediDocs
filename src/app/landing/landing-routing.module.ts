import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplainComponent } from './complain/complain.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path:'complain',
    component:ComplainComponent
  },
  {
    path: 'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
