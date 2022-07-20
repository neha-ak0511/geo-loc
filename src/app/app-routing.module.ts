import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestAboutComponent } from './test-about/test-about.component';

const routes: Routes = [
  {
    path: 'aboutus', 
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)  
  },
  {
    path: 'test',
    component: TestAboutComponent
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
