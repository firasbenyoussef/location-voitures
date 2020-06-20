import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';


const routes: Routes = [ {path: "listClient", component:ListClientComponent},
                         {path: "ajoutClient", component:AjoutClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionClientRoutingModule { }
