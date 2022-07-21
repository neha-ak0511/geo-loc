import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'aboutus', 
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)  
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
