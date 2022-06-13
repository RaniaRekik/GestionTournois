package tn.isi.devweb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.isi.devweb.entities.*;
import tn.isi.devweb.repoisitory.*;

import java.util.List;
import java.util.Optional;

@Service
public class CalculScore {
    @Autowired
    private ButRepository butRepository;
    @Autowired
    private RencontreRepository rencontreRepository;
    @Autowired
    private PoolRepository poolRepository;
    @Autowired
    private ClassementsRepository classementsRepository;
    @Autowired
    private MatchRepository matchRepository;
    @Autowired
    private EquipeRepository equipeRepository;


    //calculbut te7seb kol equipe 9adeh market men bountou fi match mou3ayen
    public int calculbut( Long id_equipe, Long id_match)
    {
       return butRepository.findByEquipeMatch(id_equipe,id_match).size();
    }
    public int calculbut1( long id_equipe, long id_match)
    {
        return butRepository.findByEquipeMatch(id_equipe,id_match).size();
    }





    //score besh ta3ti lkol équipe score selon les nombre de but el markewhom
    //fel table equipe el score yetbedel kenou marka akthar des buts
    public void score(Long id)
    {
        Rencontre  r= rencontreRepository.findById(id).get();
        int  a=calculbut(r.getEquipe1().getId(),r.getMatch().getId());
        int  b=calculbut( r.getEquipe2().getId(),r.getMatch().getId());
        System.out.println("a--->"+a);
        System.out.println("b--->"+b);
        if (a>b)
        {
            r.getEquipe1().setScore(r.getEquipe1().getScore()+3);
            equipeRepository.save(r.getEquipe1());
        }
        else if (a<b)
        {
            r.getEquipe2().setScore(r.getEquipe2().getScore()+3);
            equipeRepository.save(r.getEquipe2());
        }
        else if (a==b){
            r.getEquipe1().setScore(r.getEquipe2().getScore()+1);
            r.getEquipe2().setScore(r.getEquipe2().getScore()+1);
            equipeRepository.save(r.getEquipe1());
            equipeRepository.save(r.getEquipe2());
        }
    }

       //
       public  List<Equipe> afficheclassment(Long pool)
       {
         return  equipeRepository.findByClassement(pool);
       }

       //fel table rencontre yetzed les buts
       public  void savebuts(Long id)
       {
          Rencontre r= rencontreRepository.findById(id).get();
           r.setBut1(calculbut(r.getEquipe1().getId(),r.getMatch().getId()));
           r.setBut2(calculbut(r.getEquipe2().getId(),r.getMatch().getId()));
           rencontreRepository.save(r);
       }

       //
       public List<Rencontre> afficheAllRencontreByEtat(String etat)
       {
          return rencontreRepository.findAllRencontresByEtat(etat);
       }

       //
     public  List<Equipe> findAllEquipeByEtat(String etat)
     {


         List<Equipe> e= rencontreRepository.findAllByEtat(etat);
         List<Equipe> e1=rencontreRepository.findAllByEtat2(etat);
           e.addAll(e1);
           return e;

            /*   List<Rencontre> r=rencontreRepository.findAllRencontresByEtat(etat);
        List<Equipe> e= (List<Equipe>) new  Equipe();


        for(int i=0;i<r.size();i++)
        {
            if(r.get(i).getBut1()<r.get(i).getBut2())
            {e.get(i).setNom(r.get(i).getEquipe2().getNom()); }
            else
            {e.get(i).setNom(r.get(i).getEquipe1().getNom()); }

        }
        return e;*/
     }
/*
       public void Eliminations(Match m)
       {
           int  a=calculbut(m.getId(),m.getEquipe().get(0).getId());
           int  b=calculbut(m.getId(),m.getEquipe().get(1).getId());
           if(a>b)
           {
               rencontreRepository.updateDecisionT(m,m.getEquipe().get(0));
               rencontreRepository.updateDecisionF(m,m.getEquipe().get(1));
           }
           else {
               rencontreRepository.updateDecisionT(m,m.getEquipe().get(1));
               rencontreRepository.updateDecisionF(m,m.getEquipe().get(0));
           }
       }

       public List<Equipe> findallByEtatByDecision(String etat)
       {
         //List<Match> matches=  matchRepository.findByEtat(etat);
        return rencontreRepository.findByDecision(etat);

       }



*/


}
