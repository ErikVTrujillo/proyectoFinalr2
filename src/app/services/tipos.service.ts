import { Injectable } from '@angular/core';
import { Tipo } from 'src/models/tipos';
import {HttpClient} from '@angular/common/http';//<--- HttpClient Permite hacer el ruteo

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private http: HttpClient) { }

  URL_API= 'http://localhost:4000/tipo/'; //<-----
  public tipo:Tipo=
    {    
      id_tipo: 0,	 
      nombre_tipo:''
    };

  tipos: Tipo[]=[];

  getTipos(){
    return this.http.get<Tipo[]>(this.URL_API);   //<------
  }

}
