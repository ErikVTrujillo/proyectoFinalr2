import { Component } from '@angular/core';
import { Libro } from 'src/models/libro';
import { Tipo } from 'src/models/tipos';
import { Categoria } from 'src/models/categoria';
import { Editorial } from 'src/models/editorial';
import { LibroAltaService } from 'src/app/services/libro-alta.service';
import { TiposService } from 'src/app/services/tipos.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-libro-alta',
  templateUrl: './libro-alta.component.html',
  styleUrls: ['./libro-alta.component.css']
})
export class LibroAltaComponent implements OnInit {
  constructor(public libroService:LibroAltaService, public tipoService:TiposService, public categoriaService:CategoriaService, public editorialService:EditorialService) { }

  ngOnInit(): void { //ngOnInit -> signica que cuando se cargue el componente muestre todo lo que tiene dentro.
    //console.log(this.empleadoService.getEmpleados());
    this.getLibro();
    this.getTipo();
    this.getCategoria();
    this.getEditorial();
  }

  getEditorial(){
    this.editorialService.getEditorial().subscribe(
      res => {
        this.editorialService.editoriales= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
  
  getCategoria(){
    this.categoriaService.getCategoria().subscribe(
      res => {
        this.categoriaService.categorias= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getTipo(){
    this.tipoService.getTipos().subscribe(
      res => {
        this.tipoService.tipos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }


  getLibro(){
    this.libroService.getLibro().subscribe(
      res => {
        this.libroService.libros= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createLibro(form:NgForm){  //Sirve para agregar e insertar
    alert('Insertando Registro');
     this.libroService.createLibro(form.value).subscribe(
      res=> {
        this.getLibro();
        form.reset();
      },
      err=> console.log(err)
    )
  }     

  updateLibro(form:NgForm){
    alert('Registro actualizando'); 
       this.libroService.editLibro(form.value).subscribe( //recibe como parametro los datos del formulario
        res=> console.log(res),
        err=> console.log(err)
       );
  }

  deleteLibro(id:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('Eliminado '+id);
     if(resp){
       this.libroService.deleteLibro(id).subscribe( //elimina el registro
        (res)=>{
          this.getLibro();
        },
        (err)=> console.log(err)
       );
     }
  }

  editLibro(libro:Libro){ //recibe un objeto de la clase empleado
    this.libroService.libro= libro;
  }

  formReset(form:NgForm){
    this.libroService.libro=form.value;
    form.reset();
  }
}
