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

@NgModule({
  declarations: [ //componentes de angular
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent
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
