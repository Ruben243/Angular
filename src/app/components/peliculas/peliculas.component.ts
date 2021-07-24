import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string
  public peliculas: Array<Pelicula>;
  public favorita!:Pelicula;//variable que recibe un objeto tipo pelicula
  public fecha:any
  constructor(
    private _peliculasService:PeliculaService
  ) {
    this.titulo = "Componente Peliculas";
    this.peliculas = this._peliculasService.getPeliculas()
    this.fecha=new Date(2021,6,6);
  }

  ngOnInit() {
    
   }
  ngDoCheck() {
    

  }

  cambiarTitulo() {
    this.titulo = "Titulo Cambiado";
  }

  ngOnDestroy() {
  

  }

  //metodo que asigna la pelicula marcada como favorita a la varibale
  mostrarFavorita(event:any){
    this.favorita=event.pelicula;
    
  }

}
