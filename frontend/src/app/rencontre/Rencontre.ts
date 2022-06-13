import { Match } from "../match/match";

import { Equipe } from "../equipe/equipe";

export interface Rencontre {
    id: number;
    name: string;
    match : Match;
    equipe1 : Equipe;
    equipe2 : Equipe;
    but1: number;
    but2: number;

}