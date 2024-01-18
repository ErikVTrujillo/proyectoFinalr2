import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TipoLibro } from 'src/models/tipoLibro';

@Injectable({
  providedIn: 'root'
})
export class MensagesService {

  constructor() { }

  private message = new Subject<TipoLibro>(); // Corregido: Subject de TipoCita

  sendMessage(tipoLibro: TipoLibro): void {
    this.message.next(tipoLibro);
  }

  getMessage(): Observable<TipoLibro> { // Corregido: Observable de TipoCita
    return this.message.asObservable();
  }
}
