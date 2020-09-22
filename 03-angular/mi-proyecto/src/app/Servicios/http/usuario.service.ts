import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class UsuarioService {
  url = 'http://localhost:1337';

  //Constructor en angular sirve para inyectar dependencias
  constructor(
    private readonly _httpClient: HttpClient //servicio
  ) {


  }


  //obtener uno por id

  obtenerUnoPorId(idUsuario) {
    return this._httpClient.get(this.url + '/usuario/' + idUsuario);
  }

  traerTodos() {

    return this._httpClient.get(this.url + '/usuario');
  }


  //Post /usaurio
  crear(usuario) {
    return this._httpClient.post(
      this.url + '/usuario', //url
      usuario
    );
  }

  eliminar(idUsuario: number) {
    return this._httpClient.delete(
      this.url + '/usuario/' + idUsuario);


  }

}
