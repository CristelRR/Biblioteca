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
import { ActulizarMaterialComponent } from './componentes/actulizar-material/actulizar-material.component';
import { EliminarMaterialComponent } from './componentes/eliminar-material/eliminar-material.component';
import { RegistrarMaterialComponent } from './componentes/registrar-material/registrar-material.component';

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
    ActulizarMaterialComponent,
    EliminarMaterialComponent,
    RegistrarMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
