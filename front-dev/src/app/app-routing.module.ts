import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/telas/login/login.component';
import { SidebarComponent } from './components/telas/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
