import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AccountComponent } from './account.component';
//import { AuthRoutingModule } from './auth-routing.module';

const routes: Routes = [
	{
		path: 'account',
		component: AccountComponent,
		children : [
			{
				path: 'list',
				component: ListComponent,
			},
			{
				path: 'add',
				component: AddComponent,
			},
			{
				path: 'detail/:id',
				component: DetailComponent,
			},
			{
				path: 'edit/:id',
				component: EditComponent,
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
