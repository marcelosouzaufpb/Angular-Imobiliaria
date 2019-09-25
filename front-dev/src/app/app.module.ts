import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/telas/login/login.component';
import { SidebarComponent } from './components/telas/sidebar/sidebar.component';
import { NavbarComponent } from './components/telas/navbar/navbar.component';
import { NavbarFiltroComponent } from './components/telas/navbar-filtro/navbar-filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    NavbarFiltroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
