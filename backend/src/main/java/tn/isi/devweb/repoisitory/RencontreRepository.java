package tn.isi.devweb.repoisitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.Equipe;
import tn.isi.devweb.entities.Match;
import tn.isi.devweb.entities.Rencontre;

import java.util.List;

@Repository
public interface RencontreRepository extends JpaRepository<Rencontre, Long> {

    /* Rencontre findById(Equipe e);
     @Query(value = "select  r from  Rencontre  r where r.id_equipe='id' and r.id_match.etat='huitieme'")
     List<Rencontre> findByIdEquipe(Equipe id);

     @Query(value = "update Rencontre  r set r.decision='Accepte' where r.id_match='id_match' and r.id_equipe='id_equipe'")
     void updateDecisionT(Match m, Equipe p);
     @Query(value = "update Rencontre  r set r.decision='Refus' where r.id_match='id_match' and r.id_equipe='id_equipe'")
     void updateDecisionF(Match m, Equipe p);

     @Query(value = "select r.id_equipe from  Rencontre  r where r.decision='Accept' and r.id_match.etat='etat'")
     List<Equipe> findByDecision(String etat); */

    //afficher la liste des équipes retenus pour chaque etat
    @Query(value = "select r.equipe1 from Rencontre  r where r.match.etat=:etat")
    List<Equipe> findAllByEtat(@Param("etat") String etat);
    @Query(value = "select r.equipe2 from Rencontre  r where r.match.etat=:etat")
    List<Equipe> findAllByEtat2(@Param("etat") String etat);

    //afficher la liste des rencontres selon les etats
    @Query(value = "select r from Rencontre r where r.match.etat=:etat")
    List<Rencontre> findAllRencontresByEtat(String etat);
}
