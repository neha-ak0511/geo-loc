import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './users/admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SupplierComponent } from './supplier/supplier.component';
import { PersonalsettingsComponent } from './personalsettings/personalsettings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportsComponent } from './reports/reports.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminComponent } from './admin/admin.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    UsersComponent,
    HomeComponent,
    SupplierComponent,
    PersonalsettingsComponent,
    AnalyticsComponent,
    ReportsComponent,
    SideNavComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AdminModule { }
