import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Equipe } from '../equipe/equipe';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filtre-equipe',
  templateUrl: './filtre-equipe.component.html',
  styleUrls: ['./filtre-equipe.component.css']
})
export class FiltreEquipeComponent implements OnInit {
 
  public etat:string;
  public equipes : Equipe[];
  constructor(private route: ActivatedRoute,  private matchService: MatchService, private router: Router   ) { }

  ngOnInit(): void {

    

     this.etat = this.route.snapshot.params['etat'];
    
      this.matchService.findAllEquipeByEtat(this.etat).subscribe(
        (response: Equipe[]) => {
          this.equipes = response;
          console.log(this.equipes);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
   }



  
  }
 
  



