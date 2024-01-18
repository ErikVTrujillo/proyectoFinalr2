import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { NgForm } from '@angular/forms';
import { Prestamo } from 'src/models/prestamo';
import { UsuarioAltaService } from 'src/app/services/usuario-alta.service';
import { LibroAltaService } from 'src/app/services/libro-alta.service';

@Component({
  selector: 'app-prestamo-libro',
  templateUrl: './prestamo-libro.component.html',
  styleUrls: ['./prestamo-libro.component.css']
})
export class PrestamoLibroComponent implements OnInit {
  constructor(public prestamoService:PrestamosService,public usuariosService:UsuarioAltaService,public libroService:LibroAltaService) { }

  ngOnInit(): void { //ngOnInit -> signica que cuando se cargue el componente muestre todo lo que tiene dentro.
    //console.log(this.empleadoService.getEmpleados());
    //this.getPrestamos();
  }

  getPrestamos(){

    this.prestamoService.getPrestamos().subscribe(
      res => {
        this.prestamoService.prestamos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createPrestamo(form:NgForm){  //Sirve para agregar e insertar
    alert('Insertando Registro');
     this.prestamoService.createPrestamo(form.value).subscribe(
      res=> {
        //this.getPrestamos();
        form.reset();
      },
      err=> console.log(err)
    )
  }     

  updatePrestamo(form:NgForm){
    alert('actualizando'); 
       this.prestamoService.editPrestamo(form.value).subscribe( //recibe como parametro los datos del formulario
        res=> this.getPrestamos(),
        err=> console.log(err)
       );
  }

  deletePrestamo(id:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando '+id);
     if(resp){
       this.prestamoService.deletePrestamo(id).subscribe( //elimina el registro
        (res)=>{
          this.getPrestamos();
        },
        (err)=> console.log(err)
       );
     }
  }

  editPrestamos(prestamo:Prestamo){ //recibe un objeto de la clase empleado
    this.prestamoService.prestamo= prestamo;
  }

  formReset(form:NgForm){
    this.prestamoService.prestamo=form.value;
    form.reset();
  }

  getUsuarioById(form:NgForm){
    //id=1;
    const {id_usuario} = form.value;
    alert('Consultando')
    this.usuariosService.getByIdUsuario(id_usuario).subscribe(
      res => {
        this.usuariosService.usuarios= res;
        this.usuariosService.usuario=this.usuariosService.usuarios[0];
        alert(this.usuariosService.usuario.nombre);
      },
      err => console.log(err)
    )
  }

  getLibroById(form:NgForm){
    //id=1;
    const {id_libro} = form.value;
    alert('Consultando'+id_libro)
    this.libroService.getLibroID(id_libro).subscribe(
      res => {
      
        console.log(res);
        this.libroService.libros= res;
        this.libroService.libro=this.libroService.libros[0];
        alert(this.libroService.libro.titulo);
      },
      err => console.log(err)
    )
  }
}