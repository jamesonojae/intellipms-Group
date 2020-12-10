import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListActivatedDevicesComponent} from './list-activated-devices/list-activated-devices.component';
import {ActivateDeviceComponent} from './activate-device/activate-device.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-activated-devices'
  },
  {
    path: 'list-activated-devices',
    component: ListActivatedDevicesComponent
  },
  {
    path: 'activate-device',
    component: ActivateDeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
