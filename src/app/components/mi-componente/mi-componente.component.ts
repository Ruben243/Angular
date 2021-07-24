import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  public titulo: string
  public comentario: string
  public year: number
  public mostrarPeliculas: boolean

  constructor() {
    this.titulo = "Bienvenido";
    this.comentario = "mi primer componente";
    this.year = 2020;
    this.mostrarPeliculas = true;
  }

  ngOnInit(): void {
  }

  ocultarPeliculas() {
    this.mostrarPeliculas = false;
  }
}

