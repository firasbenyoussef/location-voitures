import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionVoitureRoutingModule } from './gestion-voiture-routing.module';
import { ListVoitureComponent } from './list-voiture/list-voiture.component';
import {MatButtonModule} from '@angular/material/button';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [ListVoitureComponent, AjoutVoitureComponent],
  imports: [
    CommonModule,
    GestionVoitureRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class GestionVoitureModule { }
