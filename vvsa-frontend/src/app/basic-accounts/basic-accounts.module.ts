import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { BasicAccountListComponent } from './basic-account-list/basic-account-list.component';
import { BasicDetailComponent } from './basic-detail/basic-detail.component';
import { WithdrawalDetailComponent } from './withdrawal-detail/withdrawal-detail.component';
import {MatTableModule} from "@angular/material/table";
import {UtilsModule} from "../utils/utils/utils.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BasicAccountsDetailComponent,
    BasicAccountListComponent,
    BasicDetailComponent,
    WithdrawalDetailComponent
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    MatTableModule,
    UtilsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class BasicAccountsModule { }
