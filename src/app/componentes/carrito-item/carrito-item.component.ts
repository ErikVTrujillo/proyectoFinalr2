import { Component, Input, OnInit } from '@angular/core';
import { CarritoItem } from 'src/models/carritoItem';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent implements OnInit {
  @Input() carritoItem!: CarritoItem;

  constructor(){}

  ngOnInit(): void {
    
  }
}
