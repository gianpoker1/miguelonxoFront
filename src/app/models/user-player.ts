import { Player } from "./player.model";
import { Usuario } from "./usuario.model";

export interface UserPlayer {
    usuario: Usuario;
    player: Player;
}