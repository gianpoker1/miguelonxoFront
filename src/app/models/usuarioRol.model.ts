import { Rol } from "./rol.model";
import { Usuario } from "./usuario.model";

export class UsuarioRol {
    id!: number;
    usuario!: Usuario;
    rol!: Rol;
}