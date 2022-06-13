package tn.isi.devweb.services;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.isi.devweb.entities.Arbitre;
import tn.isi.devweb.entities.Match;
import tn.isi.devweb.repoisitory.MatchRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MatchService  {
    @Autowired
    private MatchRepository matchRepository;

    public void createMatch(Match m)
    {
        matchRepository.save(m);
    }

   /* public Match updateMatch(Match m)
    {
        Match m1=matchRepository.findById(m.getId()).orElse(null);
        m1.setNom(m.getNom());
        m1.setArbitre(m.getArbitre());
        m1.setDt(m.getDt());
        m1.setLieu(m.getLieu());
        return matchRepository.save(m1);
    }*/

    public void deleteMatch(Long id)
    {
        matchRepository.deleteById(id);
    }

    public List<Match> allMatch()
    {
      return  matchRepository.findAll();
    }

    public Match getMatch(Long id)
    {
        return matchRepository.findById(id).get();
    }
    public  List<Match> afficheMatchbyetat(String etat)
    {
        return  matchRepository.findByEtat(etat);
    }


    public Match updateMatch(Match match) {
        return matchRepository.save(match);
    }



    public  void findByEtataByDecision(String etat)
    {

    }

}
