import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicAccountListComponent} from "./basic-account-list/basic-account-list.component";
import {BasicAccountsDetailComponent} from "./basic-accounts-detail/basic-accounts-detail.component";

const routes: Routes = [
  {path: '', component: BasicAccountListComponent},
  {path: 'detail', component: BasicAccountsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAccountsRoutingModule { }
