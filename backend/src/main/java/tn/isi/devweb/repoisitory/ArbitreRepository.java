package tn.isi.devweb.repoisitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.Arbitre;

@Repository
public interface ArbitreRepository extends JpaRepository<Arbitre, Long> {
}
