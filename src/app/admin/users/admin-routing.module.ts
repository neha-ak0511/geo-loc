import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { HomeComponent } from '../home/home.component';
import { PersonalsettingsComponent } from '../personalsettings/personalsettings.component';
import { ReportsComponent } from '../reports/reports.component';
import { SupplierComponent } from '../supplier/supplier.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'overview', component: HomeComponent },
      { path: 'suppliers', component: SupplierComponent },
      { path: 'users', component: UsersComponent },
      { path: 'personalsettings', component: PersonalsettingsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }