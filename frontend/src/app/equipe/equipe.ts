import { Pool } from "../pool/pool";

export interface Equipe {
    id : number;
    score : number;
    nom: string;
    pool : Pool;
}
