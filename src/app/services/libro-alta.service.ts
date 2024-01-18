import { Libro } from 'src/models/libro';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<--- HttpClient Permite hacer el ruteo


@Injectable({
  providedIn: 'root'
})
export class LibroAltaService {
  URL_API= 'http://localhost:4000/libro/'; //<-----
  public libro:Libro=
    {    
      id_libro: 0,	
      id_tipo: 0,	
      titulo:	'',
      autor: '', 	
      id_editorial: 0,	
      id_categoria: 0,	
      edicion: 0,	
      volumen: 0,	
      ubicacion: '',	
      fecha_publicacion: '',	
      lugar_publicacion: '',	
      foto: '',
      nombre_editorial: '',
      categoria: '',
      nombre_tipo: '',
      precio: ''
};

  libros: Libro[]=[];

  constructor(private http: HttpClient) { }

  getLibro(){
    return this.http.get<Libro[]>(this.URL_API);   //<------
  }

  getLibroID(id_libro: number) {
    return this.http.get<Libro[]>(this.URL_API+id_libro);
  }
  
  createLibro(libro:Libro){
    return this.http.post(this.URL_API,libro);
  }

  deleteLibro(id_libro:number){
     return this.http.delete(this.URL_API+id_libro);
    }

  editLibro(libro:Libro){
    return this.http.put(this.URL_API+libro.id_libro,libro);
  }

  getByTitulo(titulo:string){
    return this.http.get<Libro[]>(this.URL_API+'/titulo/'+titulo);   //<------ Busqueda por titulo
  }
  
  getByAutor(autor:string){
    return this.http.get<Libro[]>(this.URL_API+'/autor/'+autor);   //<------ Busqueda por tipo
  }
  
  getByTipo(nombre_tipo:string){
    return this.http.get<Libro[]>(this.URL_API+'/nombre_tipo/'+nombre_tipo);   //<------ Busqueda por tipo
  }
  
    
  getByCategoria(categoria:string){
    return this.http.get<Libro[]>(this.URL_API+'/categoria/'+categoria);   //<------Busqueda de por Categoria
  }
}

