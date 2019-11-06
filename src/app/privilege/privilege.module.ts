import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilegeRoutingModule } from './privilege-routing.module';
import { PrivilegeComponent } from './privilege.component';


@NgModule({
  declarations: [PrivilegeComponent],
  imports: [
    CommonModule,
    PrivilegeRoutingModule
  ]
})
export class PrivilegeModule { }
