import { Component } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { Carrera } from 'src/models/carreras';
import { UsuarioAltaService } from 'src/app/services/usuario-alta.service';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarrerasService } from 'src/app/services/carreras.service';

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.css']
})
export class UsuarioActualizarComponent {
  constructor(public usuariosService:UsuarioAltaService, public carrerasService:CarrerasService) { }

  ngOnInit(): void { //ngOnInit -> sb  ignica que cuando se cargue el componente muestre todo lo que tiene dentro.
    //console.log(this.empleadoService.getEmpleados());
    this.getUsuario();
    this.getCarrera();
  }

  getCarrera(){
    this.carrerasService.getCarrera().subscribe(
      res => {
        this.carrerasService.carreras= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getUsuario(){
    this.usuariosService.getUsuarios().subscribe(
      res => {
        this.usuariosService.usuarios= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getByIdUsuario(id_usuario:number){
    this.usuariosService.getByIdUsuario(id_usuario).subscribe(
      res => {
        this.usuariosService.usuarios= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }


  createUsuario(form:NgForm){  //Sirve para agregar e insertar
    alert('Insertando Registro');
     this.usuariosService.createUsuario(form.value).subscribe(
      res=> {
        this.getUsuario();
        form.reset();
      },
      err=> console.log(err)
    )
  }     

  updateUsuario(form:NgForm){
    alert('Actualizando'); 
       this.usuariosService.editUsuario(form.value).subscribe( //recibe como parametro los datos del formulario
        res=> console.log(res),
        err=> console.log(err)
       );
  }

  deleteLibro(form:NgForm){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('Eliminando '+form.value.id_libro);
     if(resp){
       this.usuariosService.deleteUsuario(form.value.id_libro).subscribe( //elimina el registro
        (res)=>{
          this.getUsuario();
        },
        (err)=> console.log(err)
       );
     }
  }

  editLibro(usuario:Usuario){ //recibe un objeto de la clase empleado
    this.usuariosService.usuario= usuario;
  }

  formReset(form:NgForm){
    this.usuariosService.usuario=form.value;
    form.reset();
  }

}
