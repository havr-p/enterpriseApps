import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { BasicAccountsComponent } from './basic-accounts/basic-accounts.component';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';
import { WithdrawalDetailComponent } from './withdrawal-detail/withdrawal-detail.component';


@NgModule({
  declarations: [
    BasicAccountsDetailComponent,
    BasicAccountsComponent,
    BasicDetailComponent,
    WithdrawalDetailComponent
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule
  ]
})
export class BasicAccountsModule { }
