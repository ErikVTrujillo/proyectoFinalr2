import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_API = 'http://localhost:4000/login/';

  public login: Login = {
    id_usuario: '',
    contrasena:'',
    tipo:''
  };

  private idUsuarioSubject = new BehaviorSubject<string>('');
  idUsuario$ = this.idUsuarioSubject.asObservable();

  loginn:Login[]=[];

  constructor(private http: HttpClient) { }

  getUsr(){
    return this.http.get<Login[]>(this.URL_API)
  }

  valLog(loginn: Login) {
    return this.http.post<Login[]>(`${this.URL_API}/${loginn.id_usuario}/${loginn.contrasena}`, {})
      .pipe(
        tap((res: any) => {
          if (res.length > 0) {
            this.setIdAlumno(res[0].id_usuario); // Almacena el ID del usuario al iniciar sesión
          }
        })
      );
  }
  
  insUsr(loginn:Login){
    return this.http.post(this.URL_API, loginn)
  }

  // Método para establecer el idAlumno
  setIdAlumno(id_usuario: string) {
    this.idUsuarioSubject.next(id_usuario);
  }

  // Método para obtener el idAlumno como Observable
  getIdAlumno(): Observable<string> {
    return this.idUsuarioSubject.asObservable();
  }

}