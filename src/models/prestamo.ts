export interface Prestamo{
    id_prestamo?: any,           //<<< ...No es obligatorio que tenga el mismo nobre de atributo en la base... ? significa que es opcional
    id_usuario: number,
    id_libro: number,
    fecha_prestamo?: any,
    fecha_devolucion?: any,
    fecha_entrega?: any,      //<<<
    estado?: string,   //<<<
}