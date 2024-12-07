import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoActividadesComponent } from './components/listado-actividades/listado-actividades.component';




export const routes: Routes = [
  { path: 'actividades', component: ListadoActividadesComponent },
  { path: '', redirectTo: 'actividades', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
