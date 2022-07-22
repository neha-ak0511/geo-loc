import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRenderComponent } from './map-render/map-render.component';



@NgModule({
  declarations: [
    MapRenderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MapRenderComponent]
})
export class SharedModule { }
