import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistrarLibroComponent } from './componentes/registrar-libro/registrar-libro.component';
import { ActualizarLibroComponent } from './componentes/actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './componentes/eliminar-libro/eliminar-libro.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { EliminarMaterialComponent } from './componentes/eliminar-material/eliminar-material.component';
import { RegistrarMaterialComponent } from './componentes/registrar-material/registrar-material.component';
import { PrestamoLibroComponent } from './componentes/prestamo-libro/prestamo-libro.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';
import { EliminarUsuarioComponent } from './componentes/eliminar-usuario/eliminar-usuario.component';
import { ActualizarMaterialComponent } from './componentes/actualizar-material/actualizar-material.component';
import { ActualizarUsuarioComponent } from './componentes/actualizar-usuario/actualizar-usuario.component';
import { BuscarMaterialesComponent } from './componentes/buscar-materiales/buscar-materiales.component';
import { BuscarLibrosComponent } from './componentes/buscar-libros/buscar-libros.component';
import { PrestamoMaterialComponent } from './componentes/prestamo-material/prestamo-material.component';
import { DevolucionComponent } from './componentes/devolucion/devolucion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InstitucionalComponent,
    HomeComponent,
    RegistrarLibroComponent,
    ActualizarLibroComponent,
    EliminarLibroComponent,
    MenuLateralComponent,
    EliminarMaterialComponent,
    RegistrarMaterialComponent,
    PrestamoLibroComponent,
    RegistrarUsuarioComponent,
    EliminarUsuarioComponent,
    ActualizarMaterialComponent,
    ActualizarUsuarioComponent,
    BuscarMaterialesComponent,
    BuscarLibrosComponent,
    PrestamoMaterialComponent,
    DevolucionComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
