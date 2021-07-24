import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user:any

  constructor() {
    this.user={
      nombre:"",
      apellidos:"",
      bio:"",
      genero:"",
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    
  }
  hasDadoClick(){
    console.log('Has dado click¡¡');
    
  }
  hasSalido(){
    console.log('Has salido');
    
  }
  pulsasEnter(){
    console.log('pulsaste enter');
    
  }
}
