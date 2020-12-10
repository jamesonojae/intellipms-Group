import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import {NgbAccordionModule, NgbDatepickerModule, NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CreateUserComponent, UsersPanelComponent],
  imports: [
    CommonModule,
    UsersManagementRoutingModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbDatepickerModule
  ]
})
export class UsersManagementModule { }
