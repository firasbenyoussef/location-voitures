import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ {
  path: 'gestionVoiture',
  loadChildren: () => import('./gestion-voiture/gestion-voiture.module')
    .then(mod => mod.GestionVoitureModule)

},

{
  path: 'gestionClient',
  loadChildren: () => import('./gestion-Client/gestion-Client.module')
    .then(mod => mod.GestionClientModule)

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
