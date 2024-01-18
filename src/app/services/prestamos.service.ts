import { Injectable } from '@angular/core';
import { Prestamo } from 'src/models/prestamo';
import {HttpClient} from '@angular/common/http';//<--- HttpClient Permite hacer el ruteo


@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  URL_API= 'http://localhost:4000/prestamo/'; //<-----
  public prestamo:Prestamo=
  {id_prestamo:0, id_usuario:0, id_libro:0, fecha_prestamo:'', fecha_devolucion:'', fecha_entrega:'', estado:''};

  prestamos: Prestamo[]=[];

  constructor(private http: HttpClient) { }

  getPrestamos(){
    return this.http.get<Prestamo[]>(this.URL_API);   //<------
  }

  createPrestamo(prestamo:Prestamo){
    return this.http.post(this.URL_API,prestamo);
  }

  deletePrestamo(id_prestamo:number){
     return this.http.delete(this.URL_API+id_prestamo);
      
    }

    editPrestamo(prestamo:Prestamo){
      return this.http.put(this.URL_API+prestamo.id_prestamo,prestamo);
    }
}