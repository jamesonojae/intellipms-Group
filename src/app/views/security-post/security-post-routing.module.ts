import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecurityPanelComponent} from './security-panel/security-panel.component';
import {SecurityDashboardComponent} from './security-dashboard/security-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'security-panel',
    pathMatch: 'full'
  },
  {
    path: 'security-panel',
    component: SecurityPanelComponent
  },
  {
    path: 'security-dashboard',
    component: SecurityDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityPostRoutingModule { }
