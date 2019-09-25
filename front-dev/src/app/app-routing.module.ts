import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/telas/login/login.component';
import { SidebarComponent } from './components/telas/sidebar/sidebar.component';
import { NavbarComponent } from './components/telas/navbar/navbar.component';
import { NavbarFiltroComponent } from './components/telas/navbar-filtro/navbar-filtro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'navbarFiltro', component: NavbarFiltroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
