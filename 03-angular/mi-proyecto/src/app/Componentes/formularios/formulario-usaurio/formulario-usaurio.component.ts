import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usaurio',
  templateUrl: './formulario-usaurio.component.html',
  styleUrls: ['./formulario-usaurio.component.css']
})
export class FormularioUsaurioComponent implements OnInit {

  @Input()
  nombreInput: string;

  @Input()
  cedulaInput: string;

  @Input()
  estadoCivilInput: string;

  @Output()
  informacionValidada: EventEmitter<any> = new EventEmitter<any>();


  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string;

  constructor() {
  }

  ngOnInit(): void {

    if (this.nombreInput && this.cedulaInput && this.estadoCivilInput) {
      this.nombreModelo = this.nombreInput;
      this.cedulaModelo = this.cedulaInput;
      this.estadoCivilModelo = this.estadoCivilInput;
    }
  }

  crearUsuario(formulario) {
    const cedula = this.cedulaModelo;
    const esNumero = !isNaN(Number(cedula));
    if (esNumero) {
      //llamar al servicio http y envia un post al servicio con los datos del formulario

      console.error('Listo');
      this.informacionValidada.emit({
        nombre: this.nombreModelo,
        cedula: this.cedulaModelo,
        estadoCivil: this.estadoCivilModelo
      });
    } else {
      console.error('no es un numero');

    }


  }

  ayuda() {
    alert('ayuda');

  }
}
