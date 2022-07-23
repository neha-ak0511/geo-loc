import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home/home-routing-module';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    HomeComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    SharedModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule
  ]
})
export class HomeModule { }
