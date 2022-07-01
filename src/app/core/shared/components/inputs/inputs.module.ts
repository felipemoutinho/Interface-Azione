import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { InputSelectComponent } from './input-select/input-select.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [InputTextComponent,InputSelectComponent]
})
export class InputsModule { }
