import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../Servicios/http/usuario.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;

  constructor( //inyectar las dependencias
    private readonly _usuarioService: UsuarioService,
    private readonly _activatedRoute: ActivatedRoute
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
              },
              (error) => {
                console.log('error', error);

              }
            );
        }
      );
  }

}
