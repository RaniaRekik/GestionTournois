package tn.isi.devweb.repoisitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.But;

import java.util.List;

@Repository
public interface ButRepository extends JpaRepository<But, Long> {

    @Query(value = "select b from But b  where b.equipe.id= :equipe and b.match.id= :match ")
    List<But> findByEquipeMatch(@Param("equipe") Long equipe, @Param("match") Long match);
}
