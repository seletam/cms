import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AccountComponent } from './account.component';

@NgModule({
   declarations: [AccountComponent, AddComponent, DetailComponent, EditComponent, ListComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [AccountComponent, AddComponent, DetailComponent, EditComponent, ListComponent],
  providers : []
})
export class AccountModule { }
