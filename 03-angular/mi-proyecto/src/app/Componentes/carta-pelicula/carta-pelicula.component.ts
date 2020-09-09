import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<any>();

  @Output()
  eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<any>();

  urlEjemploImagen = 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/12/20/Recortada/img_astrid_20191223-145256_imagenes_lv_terceros_combopelis19-k3S-U472367896624VND-992x558@LaVanguardia-Web.jpg';
  linkTextoEjemplo = 'https://www.google.com';
  textoEjemplo= 'Vinicio';

  constructor() {
    console.log('Constructor');

  }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destry');
  }

  ejemploFuncion()
  {
    alert('hola');

  }
  eventoObBlur()
  {
    console.log('Blur');
  }

  ejecutarEventoDioClic()
  {
    this.eventoDioClicEnBoton.emit(true);
  }

  ejecutarEventoDioClicImagen()
  {
    this.eventoDioClicEnImagen.emit(true);
  }

}
