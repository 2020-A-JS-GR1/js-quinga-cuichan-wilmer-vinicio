import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  urlEjemploImagen = 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/12/20/Recortada/img_astrid_20191223-145256_imagenes_lv_terceros_combopelis19-k3S-U472367896624VND-992x558@LaVanguardia-Web.jpg';
  linkTextoEjemplo = 'www.googlee.com';
  textoEjemplo= 'Vinicio';

  constructor() { }

  ngOnInit(): void {
  }

  ejemploFuncion()
  {
    alert('hola');

  }
  eventoObBlur()
  {
    console.log('Blur');
  }
}
