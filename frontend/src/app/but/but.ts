import { Match } from "../match/match";
import { Equipe } from "../equipe/equipe";
import { Time } from "@angular/common";

export interface  But {
    id : number;
    minute  : String;
    match : Match[];
    equipe : Equipe[];
}


