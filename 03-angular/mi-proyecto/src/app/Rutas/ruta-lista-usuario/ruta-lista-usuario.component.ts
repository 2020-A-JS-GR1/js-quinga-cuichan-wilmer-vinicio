import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../Servicios/http/usuario.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuario = [];

  constructor( //inyectar dependencias
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) {
  }

  irAEditarUsuario(id: number) {
    const ruta = ['/usuario', 'editar', id];
    // /usuario/editar/1

    this._router.navigate(ruta);
  }

  eliminarUsuario(id: number) {
    const obsEliminar = this._usuarioService
      .eliminar(id);
    obsEliminar
      .subscribe(
        () => {
          const indice = this.arregloUsuario
            .findIndex(
              usuario => usuario.id === id);
          this.arregloUsuario.splice(indice, 1);
        },
        (error) => {
          console.log("Error", error);

        }
      );
  }

  ngOnInit(): void {

    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (usuario: any[]) => {
          this.arregloUsuario = usuario;

        },
        (error) => {
          console.log("Error", error);
        }
      );
  }

}
