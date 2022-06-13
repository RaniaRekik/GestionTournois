package tn.isi.devweb.repoisitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.Equipe;

import java.util.List;

@Repository
public interface EquipeRepository extends JpaRepository<Equipe,Long> {
    @Query(value = "select  e from Equipe  e where e.pool.id_pool=:pool order by e.score DESC ")
    List<Equipe> findByClassement(@Param("pool") Long pool);
}
