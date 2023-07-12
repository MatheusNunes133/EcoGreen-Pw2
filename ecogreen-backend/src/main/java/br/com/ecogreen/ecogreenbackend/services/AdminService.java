package br.com.ecogreen.ecogreenbackend.services;

import br.com.ecogreen.ecogreenbackend.models.PostModel;
import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.repositories.PostRepository;
import br.com.ecogreen.ecogreenbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    private PostRepository postRepository;

    public Page<UserModel> getAllUsers(PageRequest page){
        return repository.findAllUsers(page);
    }

    public ResponseEntity<Map<String, String>> deleteUser(Long id){
        try{
            Optional<UserModel> foundUser = repository.findById(id);

            if(!foundUser.isEmpty()){
                repository.delete(foundUser.get());
                return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Map.of("success", "Usuário deletado com sucesso!"));
            }else{
                return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(Map.of("error", "Erro ao deletar usuário!"));
            }
        }catch (Exception exception){
            throw new RuntimeException(exception);
        }
    }

    public ResponseEntity<Map<String, String>> updateUser(Long id, UserModel newUser, MultipartFile file){
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
                return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Map.of("success","Usuário atualizado com sucesso!"));
            }else{
                return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(Map.of("error","Erro ao atualizar usuário!"));
            }

        }catch (IOException exception){
            throw new RuntimeException(exception);
        }
    }

    public Page<PostModel> getAllPost(PageRequest page){
        return postRepository.getAllPosts(page);
    }

    public ResponseEntity<Map<String,String>> deletePost(Long id){
        try{
            Optional<PostModel> foundPost = postRepository.findById(id);

            if(!foundPost.isEmpty()){
                postRepository.deleteById(id);
                return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Map.of("success", "Post deletado com sucesso!"));
            }else{
                return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(Map.of("error", "Erro ao deletar post!"));
            }
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
