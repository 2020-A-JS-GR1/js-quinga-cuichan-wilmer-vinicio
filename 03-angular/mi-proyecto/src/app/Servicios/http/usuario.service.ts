import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class UsuarioService
{
  url = 'http://localhost:1337/usuario';
  //Constructor en angular sirve para inyectar dependencias
  constructor(
    private readonly _httpClient: HttpClient //servicio
  ) {


  }

  traerTodos(){

    return this._httpClient.get(this.url + '/Usuario');
  }
}
