import {Component, OnInit} from '@angular/core';
import {UsuarioService} from '../../Servicios/http/usuario.service';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  crearUsuario(usuario) {
    const observableCrear = this._usuarioService.crear(usuario);

    observableCrear
      .subscribe(
        (datoss) => {

          const url = ['/usuario', 'lista'];
          this._router.navigate(url);
        },
        (error) => {
          console.error('Error', error);


        }
      );
  }

}
