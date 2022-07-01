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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { EstadoComponent } from './core/shared/components/estado/estado.component';
import { ClientesModule } from './pages/pessoas/clientes/clientes.module';
import { MaterialModule } from './core/shared/modules/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SideBarComponent,
    HomeComponent,
    LoginComponent,
    ContatoComponent,
    AlertComponent,
    EstadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClientesModule,
    MaterialModule
  ],
  providers: [
    httpInterceptorProvider,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
