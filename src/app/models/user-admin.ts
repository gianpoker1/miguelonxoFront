import { Admin } from "./admin.model";
import { Usuario } from "./usuario.model";

export interface UserAdmin {
    usuario: Usuario;
    admin: Admin;
    roles: string[];
}