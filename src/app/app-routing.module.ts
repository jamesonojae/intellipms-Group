import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {LoginComponent} from './views/login/login.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
     /* {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },*/
      {
        path: 'users-management',
        loadChildren: () => import('./views/users-management/users-management.module').then(m => m.UsersManagementModule)
      },
      {
        path: 'attendance',
        loadChildren: () => import('./views/attendance/attendance.module').then(m => m.AttendanceModule)
      },
      {
        path: 'security-post',
        loadChildren: () => import('./views/security-post/security-post.module').then(m => m.SecurityPostModule)
      },
      {
        path: 'devices',
        loadChildren: () => import('./views/devices/devices.module').then(m => m.DevicesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
