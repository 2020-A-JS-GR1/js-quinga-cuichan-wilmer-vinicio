import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './Componentes/carta-pelicula/carta-pelicula.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./Servicios/http/usuario.service";
import { RutaInicioComponent } from './Rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './Rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutasUsuarioComponent } from './Rutas/rutas-usuario/rutas-usuario.component';
import { RutaListaUsuarioComponent } from './Rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './Rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './Rutas/ruta-editar-usuario/ruta-editar-usuario.component';

@NgModule({
  declarations: [ //componentes de angular
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutasUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent
  ],
  imports: [ //modulos que se usan
    BrowserModule, //-> importa el NGFOR y el NGIF
    AppRoutingModule,
    HttpClientModule, //-> importa el HttpClient
  ],
  providers: [ //servicio
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
