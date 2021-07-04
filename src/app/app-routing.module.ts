import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/shared/guards/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/pessoas/clientes/clientes.component';


const routes: Routes = [
  { 
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'clientes', component: ClientesComponent,canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '', component: AuthComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
