import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistrarLibroComponent } from './componentes/registrar-libro/registrar-libro.component';
import { ActualizarLibroComponent } from './componentes/actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './componentes/eliminar-libro/eliminar-libro.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: 'registrar-libro', component:RegistrarLibroComponent},
  {path: 'actualizar-libro', component:ActualizarLibroComponent},
  {path: 'eliminar-libro', component:EliminarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
