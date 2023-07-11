package br.com.ecogreen.ecogreenbackend.services;

import br.com.ecogreen.ecogreenbackend.dto.RegisterDTO;
import br.com.ecogreen.ecogreenbackend.enums.EnumRoles;
import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public Map<String, String> register(RegisterDTO registerDTO){
        try {
            UserModel newUser = new UserModel();
            newUser.setName(registerDTO.getName());
            newUser.setUsername(registerDTO.getUsername());
            newUser.setPassword(new BCryptPasswordEncoder().encode(registerDTO.getPassword()));
            newUser.setRoles(Collections.singletonList(EnumRoles.ROLE_USER));
            repository.save(newUser);
            return Map.of("success", "Usuário criado com sucesso!");
        }catch (Exception exception){
            throw new RuntimeException(exception);
        }
    }

}
