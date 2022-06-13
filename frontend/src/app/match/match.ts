import { Arbitre } from "../arbitre/arbitre";

export interface Match {
    id : number;
    nom : string;
    dt : Date;
    lieu : string;
    etat : string;
    arbitre : Arbitre;

}