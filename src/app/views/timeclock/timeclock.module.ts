import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeclockRoutingModule } from './timeclock-routing.module';
import {TimeclockDashboardComponent} from './timeclock-dashboard/timeclock-dashboard.component';
import {TimeclockLoginComponent} from './timeclock-login/timeclock-login.component';


@NgModule({
  declarations: [
    TimeclockDashboardComponent,
    TimeclockLoginComponent,
  ],
  imports: [
    CommonModule,
    TimeclockRoutingModule
  ]
})
export class TimeclockModule { }
