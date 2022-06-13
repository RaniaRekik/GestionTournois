import { Pool } from "../pool/pool";
import { Equipe } from "../equipe/equipe";
export interface Classement {
    id : number;
    bonus : number;
    e: Equipe;
    p : Pool;
}
