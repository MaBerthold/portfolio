import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';




const routes: Routes = [ 
  { path: 'menu', component: MenuComponent },
  { path: '', component: MainContentComponent },
  { path: 'policy', component: PrivacyPolicyComponent },
  { path: 'legal', component: LegalNoticeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
