package tn.isi.devweb.repoisitory;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.isi.devweb.entities.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
    public Optional<User> findByUserName(String userName);
    public boolean existsByEmail(String email);
    public boolean existsByUserName(String userName);
}