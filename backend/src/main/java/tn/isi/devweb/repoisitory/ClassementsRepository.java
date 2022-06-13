package tn.isi.devweb.repoisitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.Classements;
import tn.isi.devweb.entities.Equipe;
import tn.isi.devweb.entities.Pool;

import java.util.List;

@Repository
public interface ClassementsRepository extends JpaRepository<Classements, Long> {


}
