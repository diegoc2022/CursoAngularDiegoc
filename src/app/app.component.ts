import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  num?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app-2';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(){

    this.ArregloTarjetas=[
      {titulo:'Video 1',subtitulo:'Subtitulo video 1'},
      {titulo:'Video 2',subtitulo:'Subtitulo video 2'},
      {titulo:'Video 3',subtitulo:'Subtitulo video 3'},
    ]

  }
  
}
