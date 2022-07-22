import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsRoutingModule } from './contact-us.routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    MatCardModule
  ]
})
export class ContactUsModule { }
