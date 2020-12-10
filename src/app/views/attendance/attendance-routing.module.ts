import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAttendanceComponent} from './view-attendance/view-attendance.component';
import {MonthlyAttendanceComponent} from './monthly-attendance/monthly-attendance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-attendance',
    pathMatch: 'full'
  },
  {
    path: 'view-attendance',
    component: ViewAttendanceComponent
  },
  {
    path: 'monthly-attendance',
    component: MonthlyAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
