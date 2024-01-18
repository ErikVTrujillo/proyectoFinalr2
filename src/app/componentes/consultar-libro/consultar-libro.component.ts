import { Component } from '@angular/core';
import { LibroAltaService } from 'src/app/services/libro-alta.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-consultar-libro',
  templateUrl: './consultar-libro.component.html',
  styleUrls: ['./consultar-libro.component.css']

})
export class ConsultarLibroComponent {
  
  
  constructor(public libroService:LibroAltaService) { }

  ngOnInit(): void { //ngOnInit -> signica que cuando se cargue el componente muestre todo lo que tiene dentro.
    //console.log(this.empleadoService.getEmpleados());
  }

  getByTitulo(form:NgForm){
    this.libroService.getByTitulo(form.value.titulo).subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getByAutor(form:NgForm){
    this.libroService.getByAutor(form.value.autor).subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )

  }

  getByTipo(form:NgForm){
    this.libroService.getByTipo(form.value.nombre_tipo).subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getByCategoria(form:NgForm){
    this.libroService.getByCategoria(form.value.categoria).subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  formReset(form:NgForm){
    this.libroService.libro=form.value;
    form.reset();
  }
}