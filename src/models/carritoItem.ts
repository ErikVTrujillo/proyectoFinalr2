import { TipoLibro } from "./tipoLibro";

export class CarritoItem {
    id_libro?: any;
    titulo: String;
    autor: String;
    precio: String;
    cantidad: number;

    constructor(tipoLibro: TipoLibro) {
        this.id_libro = tipoLibro.id_libro;
        this.titulo = tipoLibro.titulo;
        this.autor = tipoLibro.autor; 
        this.precio = tipoLibro.precio;
        this.cantidad = 1;
    }
}