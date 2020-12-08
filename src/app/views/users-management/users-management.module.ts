import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagementRoutingModule } from './users-management-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';


@NgModule({
  declarations: [CreateUserComponent, UsersPanelComponent],
  imports: [
    CommonModule,
    UsersManagementRoutingModule
  ]
})
export class UsersManagementModule { }
