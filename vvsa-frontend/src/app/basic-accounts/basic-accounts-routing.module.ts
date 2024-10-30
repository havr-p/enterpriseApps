import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicAccountListComponent} from "./basic-account-list/basic-account-list.component";

const routes: Routes = [
  {path: '', component: BasicAccountListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAccountsRoutingModule { }
