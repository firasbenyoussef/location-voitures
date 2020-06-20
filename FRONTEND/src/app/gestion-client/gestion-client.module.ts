import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionClientRoutingModule } from './gestion-client-routing.module';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule, MatFormField, MatLabel, MatInput, MatFormFieldModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [AjoutClientComponent, ListClientComponent],
  imports: [
    CommonModule,
    GestionClientRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class GestionClientModule { }
