import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeclockLoginComponent} from './timeclock-login/timeclock-login.component';
import {TimeclockDashboardComponent} from './timeclock-dashboard/timeclock-dashboard.component';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'timeclock',
    pathMatch: 'full'
  },*/
  {
    path: '',
    component: TimeclockLoginComponent
  },
  {
    path: 'dashboard',
    component: TimeclockDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeclockRoutingModule { }
