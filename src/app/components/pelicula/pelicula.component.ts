import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
 
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula!: Pelicula;

  @Output() marcarFavorita = new EventEmitter();  //Output con variable tipo eventEmitter

  constructor() { }

  ngOnInit() {

  }

  //metodo que recibe  un objeto tipo pelicula
  seleccionar(pelicula: any) {
    this.marcarFavorita.emit({
      pelicula: pelicula //asigna el valor de la pelicula
    })

  }
}
