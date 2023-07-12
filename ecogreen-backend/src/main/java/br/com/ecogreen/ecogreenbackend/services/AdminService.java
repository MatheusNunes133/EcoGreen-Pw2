package br.com.ecogreen.ecogreenbackend.services;

import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private UserRepository repository;

    public Page<UserModel> getAllUsers(PageRequest page){
        return repository.findAllUsers(page);
    }

    public Map<String, String> deleteUser(Long id){
        try{
            Optional<UserModel> foundUser = repository.findById(id);

            if(!foundUser.isEmpty()){
                repository.delete(foundUser.get());
                return Map.of("success", "Usuário deletado com sucesso!");
            }else{
                return Map.of("error", "Erro ao deletar usuário!");
            }
        }catch (Exception exception){
            throw new RuntimeException(exception);
        }
    }

    public Map<String, String> updateUser(Long id, UserModel newUser, MultipartFile file){
        try {
            Optional<UserModel> foundUser = repository.findById(id);
            if(!foundUser.isEmpty()){
                foundUser.get().setUsername(newUser.getUsername());
                foundUser.get().setName(newUser.getName());
                foundUser.get().setPassword(new BCryptPasswordEncoder().encode(newUser.getPassword()));
                if (!file.isEmpty()) {
                    foundUser.get().setPerfil(file.getBytes());
                }else{
                    foundUser.get().setPerfil(null);
                }
                repository.save(foundUser.get());
                return Map.of("success","Usuário atualizado com sucesso!");
            }else{
                return Map.of("error","Erro ao atualizar usuário!");
            }

        }catch (IOException exception){
            throw new RuntimeException(exception);
        }
    }
}
