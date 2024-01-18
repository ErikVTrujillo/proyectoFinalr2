import { Component } from '@angular/core';
import { EditorialService } from 'src/app/services/editorial.service';
import { NgForm } from '@angular/forms';
import { Editorial } from 'src/models/editorial';

@Component({
  selector: 'app-editorial-alta',
  templateUrl: './editorial-alta.component.html',
  styleUrls: ['./editorial-alta.component.css']
})
export class EditorialAltaComponent {

  constructor(public editorialService:EditorialService) { }

  ngOnInit(): void { 
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

  createEditorial(form:NgForm){  //Sirve para agregar e insertar
     if(form.value.id && form.value.id!==0){
       alert('actualizando'); 
       this.editorialService.editEditorial(form.value).subscribe( //recibe como parametro los datos del formulario
        res=> console.log(res),
        err=> console.log(err)
       );
     }else{//Creando si ID es nulo o distinto de 0
    this.editorialService.createEditorial(form.value).subscribe(
      res=> {
        this.getEditorial();
        form.reset();
      },
      err=> console.log(err)
    )}
  }     

  editEditorial(editorial:Editorial){ //recibe un objeto de la clase empleado
    this.editorialService.editorial= editorial;
  }

  formReset(form:NgForm){
    this.editorialService.editorial=form.value;
    form.reset();
  }

  deleteEditorial(id_editorial:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando '+id_editorial);
     if(resp){
       this.editorialService.deleteEditorial(id_editorial).subscribe( //elimina el registro
        (res)=>{
          this.getEditorial();
        },
        (err)=> console.log(err)
       );
     }
  }
}
