import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityPostRoutingModule } from './security-post-routing.module';
import { SecurityPanelComponent } from './security-panel/security-panel.component';
import { SecurityDashboardComponent } from './security-dashboard/security-dashboard.component';


@NgModule({
  declarations: [SecurityPanelComponent, SecurityDashboardComponent],
  imports: [
    CommonModule,
    SecurityPostRoutingModule
  ]
})
export class SecurityPostModule { }
