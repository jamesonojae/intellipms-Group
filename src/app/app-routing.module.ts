import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {LoginComponent} from './login/login.component';
import {TimeclockLoginComponent} from './views/timeclock/timeclock-login/timeclock-login.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
     /* {
        path: '',
        redirectTo: 'security', pathMatch: 'full'
      },
      {
        path: 'security',
        loadChildren: () => import('./views/security-post/security-post.module').then(m => m.SecurityPostModule)
      },*/
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
    path: 'timeclock',
    loadChildren: () => import('./views/timeclock/timeclock.module').then(m => m.TimeclockModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
