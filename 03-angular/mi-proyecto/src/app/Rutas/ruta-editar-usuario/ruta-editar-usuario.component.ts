import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../Servicios/http/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;

  mostrarFormulario = false;

  constructor( //inyectar las dependencias
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
  }

  //ruta-editar-usuario.component.ts
  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params
      .subscribe(
        (parametros) => {
          const id = Number(parametros.id);
          const obsUsuario = this._usuarioService.obtenerUnoPorId(id);
          obsUsuario
            .subscribe(
              (usuario: any) => {
                this.usuario = usuario;
                this.llenarFormularioConDatosDeUsuario();
              },
              (error) => {
                console.log('error', error);

              }
            );
        }
      );
  }

  llenarFormularioConDatosDeUsuario() {
    this.mostrarFormulario = true;
  }

  editarUsuario(usuario) {

    const observableEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id);
    observableEditarUsuario
      .subscribe(
        (datos) => {
          const url = ['/usuario', 'lista'];
          this._router.navigate(url);
        },
        (error) => {
          console.log('error', error);

        }
      );


  }


}
