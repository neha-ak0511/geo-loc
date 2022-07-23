import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRenderComponent } from './map-render/map-render.component';
import { ItemComponent } from './item/item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    MapRenderComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[MapRenderComponent, ItemComponent]
})
export class SharedModule { }
