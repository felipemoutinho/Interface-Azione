import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/shared/guards/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesFormComponent } from './pages/pessoas/clientes/form/clientes.form.component';
import { ClientesListComponent } from './pages/pessoas/clientes/list/clientes-list.component';


const routes: Routes = [
  { 
    path: '', component: HomeComponent,
    children: [
      {
        path: 'clientes', component: ClientesListComponent,
      },
      {
        path: 'clientes/novo', component: ClientesFormComponent
      },
      {
        path: 'clientes/editar/:idpessoa', component: ClientesFormComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '', component: AuthComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {
        path: 'login', component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
