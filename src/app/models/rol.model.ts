import { UsuarioRol } from "./usuarioRol.model";

export class Rol {
    id!:number;
    nombre!:string;
    usuariosRoles!: UsuarioRol[];
}