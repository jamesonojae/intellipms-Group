import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {UsersPanelComponent} from './users-panel/users-panel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-panel',
    pathMatch: 'full'
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'users-panel',
    component: UsersPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagementRoutingModule { }
