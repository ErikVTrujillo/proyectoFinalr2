export interface Usuario{
    id_usuario?: any,            //<<< ...No es obligatorio que tenga el mismo nobre de atributo en la base... ? significa que es opcional
    nombre: string,
    ap_paterno: string,
    ap_materno: string,
    correo: string,
    contrasena: string,      //<<<
    rol: string ,   //<<<
    id_carrera:number
}