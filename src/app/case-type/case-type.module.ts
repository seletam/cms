import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseTypeComponent } from './case-type.component';
import { CaseTypeRoutingModule } from './case-type-routing.module';

@NgModule({
  declarations: [CaseTypeComponent],
  imports: [
    CommonModule,
	CaseTypeRoutingModule
  ],
  exports: [CaseTypeComponent],
  providers : []
})
export class CaseTypeModule { }
