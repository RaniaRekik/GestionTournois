package tn.isi.devweb.repoisitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.Pool;
@Repository
public interface PoolRepository extends JpaRepository<Pool, Long> {
}
