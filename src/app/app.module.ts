import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProvider } from './core/http-interceptors';
import { SideBarComponent } from './core/layout/sidebar/sidebar.component';
import { ContatoComponent } from './core/shared/components/contato/contato.component';
import { AlertComponent } from './core/utils/alerts/alert.component';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/pessoas/clientes/clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SideBarComponent,
    HomeComponent,
    ClientesComponent,
    LoginComponent,
    ContatoComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
