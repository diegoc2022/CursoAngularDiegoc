import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  public image:string="https://img.freepik.com/vector-gratis/escena-paisaje-primavera_52683-56331.jpg?w=740&t=st=1670509182~exp=1670509782~hmac=a9fb78b9d035fbfc8ea1851a0952a82c61198f402c43ee1cb781e4743cbfd401";
  public titulo:string="Curso de Angular con interpolación";
  constructor(){}
  ngOnInit(): void {
      
  }

}
