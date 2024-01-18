import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibroAltaService } from 'src/app/services/libro-alta.service';
import { MensagesService } from 'src/app/services/mensages.service';  
import { TipoLibro } from 'src/models/tipoLibro';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent  {

  constructor(public libroAltaService: LibroAltaService, private mensagesService:MensagesService) {}

  ngOnInit(): void {
    this.getLibro();
  }

  getLibro() {
    this.libroAltaService.getLibro().subscribe(
      res => {
        this.libroAltaService.libros = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  addToCart(tipoLibro : TipoLibro): void {
    console.log('Agregado al carrito:', tipoLibro); //Esto se puede quitar
    this.mensagesService.sendMessage(tipoLibro);
  }
}
