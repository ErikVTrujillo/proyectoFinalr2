import { Usuario } from 'src/models/usuario';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<--- HttpClient Permite hacer el ruteo


@Injectable({ 
  providedIn: 'root'
})
export class UsuarioAltaService {
  URL_API= 'http://localhost:4000/usuario/'; //<-----
  public usuario:Usuario=
  {id_usuario: '', 
    nombre:'', 
    ap_paterno:'', 
    ap_materno:'', 
    correo:'', 
    contrasena:'', 
    rol:'', 
    id_carrera: 0
  };

  usuarios: Usuario[]=[];

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario[]>(this.URL_API);   //<------
  }

  getByIdUsuario(id_usuario: number) {
    return this.http.get<Usuario[]>(this.URL_API+id_usuario);
  }

  createUsuario(usuario:Usuario){
    return this.http.post(this.URL_API,usuario);
  }

  deleteUsuario(id_usuario:number){
     return this.http.delete(this.URL_API+id_usuario);
      
  }

  editUsuario(usuario:Usuario){
    return this.http.put(this.URL_API+usuario.id_usuario,usuario);
  }
}
