import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from "./Rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./Rutas/ruta-login/ruta-login.component";
import {RutasUsuarioComponent} from "./Rutas/rutas-usuario/rutas-usuario.component";
import {RutaListaUsuarioComponent} from "./Rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./Rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./Rutas/ruta-editar-usuario/ruta-editar-usuario.component";

const routes: Routes = [
  {
    component: RutaInicioComponent,
    path: 'inicio'
  },
  {
    component: RutaLoginComponent,
    path: 'login'
  },

  {
    component: RutasUsuarioComponent,
    path: 'usuario',
    children: [
      {
        component: RutaListaUsuarioComponent,
        path: 'lista'
      },
      {
        component: RutaCrearUsuarioComponent,
        path: 'crear'
      },
      {
        component: RutaEditarUsuarioComponent,
        path: 'editar/:id'
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
       }
    ]

  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
