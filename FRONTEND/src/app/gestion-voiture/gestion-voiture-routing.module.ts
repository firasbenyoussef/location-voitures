import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVoitureComponent } from './list-voiture/list-voiture.component';
import { AjoutVoitureComponent } from './ajout-voiture/ajout-voiture.component';



const routes: Routes = [ {path: "listVoiture", component:ListVoitureComponent},
                         {path: "ajoutVoiture", component:AjoutVoitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionVoitureRoutingModule { }
