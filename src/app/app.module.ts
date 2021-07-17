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
import { ClientesFormComponent } from './pages/pessoas/clientes/form/clientes.form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ClientesListComponent } from './pages/pessoas/clientes/list/clientes-list.component'


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SideBarComponent,
    HomeComponent,
    ClientesFormComponent,
    LoginComponent,
    ContatoComponent,
    AlertComponent,
    ClientesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
