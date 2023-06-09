import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { SubactividadesComponent } from './subactividades/subactividades.component';

const routes: Routes = [
  {path: '', redirectTo: 'proyectos', pathMatch: 'full'},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'resultados', component:ResultadosComponent},
  {path: 'actividades', component:ActividadesComponent},
  {path: 'subactividades', component:SubactividadesComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'ayuda', component:AyudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
