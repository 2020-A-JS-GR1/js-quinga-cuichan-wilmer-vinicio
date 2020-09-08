import { Component } from '@angular/core';
import {UsuarioService} from "./Servicios/http/usuario.service";
import {normalizeExtraEntryPoints} from "@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';

  arregloPeliculas = [
      {
        id: 1,
        url: 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/12/20/Recortada/img_astrid_20191223-145256_imagenes_lv_terceros_combopelis19-k3S-U472367896624VND-992x558@LaVanguardia-Web.jpg',
        descripcion: 'Varias peliculas',
        nombrePelicula: 'Guason y varias peliculas'

      },

    {
      id: 2,
      url: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/06/ready-player-one-1973431.jpg?itok=sZC5G8-h',
      descripcion: 'Pelicula futuro',
      nombrePelicula: 'Futuro'

    },
    {
      id: 3,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU-Eb610GKP-OWKveECpsQHRe-nbe6L0SXBA&usqp=CAU',
      descripcion: 'peliculas de accion',
      nombrePelicula: 'Virus'
    }
    ];
  arregloNumeros = [1,2,3];

  //inyectar dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }


  mesajeConsola(objecto: boolean)
  {
    console.log('llego el evento', objecto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ //then try
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

}
