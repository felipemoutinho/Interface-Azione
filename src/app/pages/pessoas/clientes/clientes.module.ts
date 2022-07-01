import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesFormComponent } from './form/clientes.form.component';
import { ClientesListComponent } from './list/clientes-list.component';
import { MaterialModule } from 'src/app/core/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InputsModule } from 'src/app/core/shared/components/inputs/inputs.module';



@NgModule({
  declarations: [ClientesFormComponent, ClientesListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InputsModule
  ],
  exports: [ClientesFormComponent, ClientesListComponent]
})
export class ClientesModule { }
