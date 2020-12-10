import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { MonthlyAttendanceComponent } from './monthly-attendance/monthly-attendance.component';
import {NgbAccordionModule, NgbCarouselModule, NgbDatepickerModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ViewAttendanceComponent, MonthlyAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbDatepickerModule
  ]
})
export class AttendanceModule { }
