import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [ 
  { path: 'menu', component: MenuComponent },
  { path: '', component: MainContentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
