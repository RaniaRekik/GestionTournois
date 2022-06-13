package tn.isi.devweb.repoisitory;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.isi.devweb.entities.Role;
import tn.isi.devweb.entities.Roles;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByRoleName(Roles role);
}