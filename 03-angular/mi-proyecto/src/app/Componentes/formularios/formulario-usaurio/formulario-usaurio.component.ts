import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario-usaurio',
  templateUrl: './formulario-usaurio.component.html',
  styleUrls: ['./formulario-usaurio.component.css']
})
export class FormularioUsaurioComponent implements OnInit {

  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  crearUsuario(formulario) {
    const cedula = this.cedulaModelo;
    const esNumero = !isNaN(Number(cedula));
    if (esNumero) {

      console.error('Listo');

    } else {
      console.error('no es un numero');

    }


  }

  ayuda() {
    alert('ayuda');

  }
}
