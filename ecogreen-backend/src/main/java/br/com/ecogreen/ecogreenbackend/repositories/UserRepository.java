package br.com.ecogreen.ecogreenbackend.repositories;

import br.com.ecogreen.ecogreenbackend.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findByUsername(String username);
}
