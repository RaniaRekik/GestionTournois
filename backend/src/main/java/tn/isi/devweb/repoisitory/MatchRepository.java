package tn.isi.devweb.repoisitory;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.Match;

import java.util.List;

@Repository

public interface MatchRepository extends JpaRepository<Match,Long> {
    @Query(value = "select m from Match m where m.etat='etat'")
    List<Match>  findByEtat(String etat);



}
