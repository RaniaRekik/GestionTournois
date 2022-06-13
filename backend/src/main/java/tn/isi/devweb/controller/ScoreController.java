package tn.isi.devweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.isi.devweb.entities.Equipe;
import tn.isi.devweb.entities.Pool;
import tn.isi.devweb.entities.Rencontre;
import tn.isi.devweb.services.CalculScore;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/score")
public class ScoreController {
    @Autowired
    private CalculScore calculScore;

    //besh tshouf kol equipe 9adeh market men bountou fi match mou3ayen
    @GetMapping("/test/{id_equipe}/{id_match}")
    public int test(@PathVariable Long id_equipe,@PathVariable Long id_match)
    {
        return calculScore.calculbut(id_equipe,id_match);
    }

    @GetMapping("/test1")
    public int test1(@RequestBody long id_equipe,@RequestBody long id_match)
    {
        return calculScore.calculbut1(id_equipe,id_match);
    }


    //{id} mte3 el rencontre tbadel el score 3and kol equipe
    @PutMapping("/calcScore/{id}")
    public void CalcScore( @PathVariable Long id)
    {
        calculScore.score(id);
    }




    //classement des équipe selon la pool
    @GetMapping("/getClassement/{pool}")
    public List<Equipe> getClassement(@PathVariable  Long pool)
    {
        return  calculScore.afficheclassment(pool);
    }


    //t9ayed les buts mte3 kol équipe fel table rencontre
    @PutMapping("/updatescore/{r}")
    public  void updateBut(@PathVariable  Long r) {calculScore.savebuts(r);}


    @GetMapping("/AllRencontresByEtat/{etat}")
    public  List<Rencontre> allRencontreByEtat(@PathVariable  String etat) {return  calculScore.afficheAllRencontreByEtat(etat);}


    //hedhi
    @GetMapping("/findAllEquipeByEtat/{etat}")
    public List<Equipe> allEquipeByEtat(@PathVariable String etat) {return  calculScore.findAllEquipeByEtat(etat);}




}
