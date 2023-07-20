import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistrarLibroComponent } from './componentes/registrar-libro/registrar-libro.component';
import { ActualizarLibroComponent } from './componentes/actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './componentes/eliminar-libro/eliminar-libro.component';
import { PrestamoLibroComponent } from './componentes/prestamo-libro/prestamo-libro.component';
import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './componentes/eliminar-usuario/eliminar-usuario.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { BuscarLibrosComponent } from './componentes/buscar-libros/buscar-libros.component';
import { BuscarMaterialesComponent } from './componentes/buscar-materiales/buscar-materiales.component';
import { RegistrarMaterialComponent } from './componentes/registrar-material/registrar-material.component';
import { PrestamoMaterialComponent } from './componentes/prestamo-material/prestamo-material.component';
import { DevolucionComponent } from './componentes/devolucion/devolucion.component';
import { ActualizarMaterialComponent } from './componentes/actualizar-material/actualizar-material.component';
import { EliminarMaterialComponent } from './componentes/eliminar-material/eliminar-material.component';
import { PrincipalComponent } from './componentes/principal/principal.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: 'registrar-libro', component:RegistrarLibroComponent},
  {path: 'actualizar-libro', component:ActualizarLibroComponent},
  {path: 'eliminar-libro', component:EliminarLibroComponent},
  {path: 'prestamo-libro', component:PrestamoLibroComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'actualizar-usuario', component:ActualizarUsuarioComponent},
  {path: 'eliminar-usuario', component:EliminarUsuarioComponent},
  {path: 'buscar-libro', component:BuscarLibrosComponent},
  {path: 'buscar-material', component: BuscarMaterialesComponent},
  {path: 'registrar-material', component: RegistrarMaterialComponent},
  {path: 'actualizar-material', component: ActualizarMaterialComponent},
  {path: 'prestamo-material', component: PrestamoMaterialComponent},
  {path: 'devolucion', component: DevolucionComponent},
  {path: 'eliminar-material', component:EliminarMaterialComponent},
  {path: 'principal', component:PrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
