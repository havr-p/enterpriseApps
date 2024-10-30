import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m =>
      m.DashboardModule)
  },
  {
    path: 'basic-accounts',
    loadChildren: () => import('./basic-accounts/basic-accounts.module').then(m =>
      m.BasicAccountsModule)
  },
  {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m =>
      m.DashboardModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }