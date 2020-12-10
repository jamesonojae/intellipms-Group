import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { ActivateDeviceComponent } from './activate-device/activate-device.component';
import { ListActivatedDevicesComponent } from './list-activated-devices/list-activated-devices.component';
import {NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ActivateDeviceComponent, ListActivatedDevicesComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgbPaginationModule,
    NgbDropdownModule
  ]
})
export class DevicesModule { }
