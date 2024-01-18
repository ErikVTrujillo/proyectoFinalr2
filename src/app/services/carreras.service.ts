import { Injectable } from '@angular/core';
import { Carrera } from 'src/models/carreras';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  constructor(private http : HttpClient) { }

  URL_API='http://localhost:4000/carrera/';
  public carrera:Carrera =
  {
    id_carrera:'',
    carrera:'',
    area: ''
  };

  carreras:Carrera[]=[];


  getCarrera(){
    return this.http.get<Carrera[]>(this.URL_API);
  }

}
