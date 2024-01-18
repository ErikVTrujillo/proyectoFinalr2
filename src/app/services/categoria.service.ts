import { Injectable } from '@angular/core';
import { Categoria } from 'src/models/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http : HttpClient) { }

  URL_API='http://localhost:4000/categoria/';
  public categoria:Categoria =
  {
    id_categoria:0,
    categoria:''
  };

  categorias:Categoria[]=[];


  getCategoria(){
    return this.http.get<Categoria[]>(this.URL_API);
  }
}

