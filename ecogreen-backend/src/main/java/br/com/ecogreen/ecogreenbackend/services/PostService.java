package br.com.ecogreen.ecogreenbackend.services;

import br.com.ecogreen.ecogreenbackend.dto.CreatePostDTO;
import br.com.ecogreen.ecogreenbackend.models.PostModel;
import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.repositories.PostRepository;
import br.com.ecogreen.ecogreenbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExtractUsernameTokenJWT extractToken;

    public ResponseEntity<Map<String, String>> createPost(String token, CreatePostDTO dto){
        try {
            Optional<UserModel> foundUser = userRepository.findByUsername(extractToken.extractUsernameToken(token));
            if(!foundUser.isEmpty()){
                PostModel newPost = new PostModel();
                newPost.setTitle(dto.getTitle());
                newPost.setMessage(dto.getMessage());
                newPost.setUser(foundUser.get());
                repository.save(newPost);
                return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Map.of("success", "Post Criado com sucesso!"));
            }else{
                return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(Map.of("error", "Erro ao criar post"));
            }
        }catch (Exception exception){
            throw new RuntimeException(exception);
        }
    }

    public ResponseEntity<Map<String, String>> updatePost(String token, Long id, CreatePostDTO dto){
        try {
            Optional<PostModel> foundPost = repository.findById(id);
            Optional<UserModel> foundUser = userRepository.findByUsername(extractToken.extractUsernameToken(token));

            if(!foundPost.isEmpty() && foundPost.get().getUser() == foundUser.get()){
                foundPost.get().setMessage(dto.getMessage());
                foundPost.get().setTitle(dto.getTitle());
                repository.save(foundPost.get());
                return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Map.of("success", "Postagem atualizada com sucesso!"));
            }else{
                return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(Map.of("error", "Erro ao atualizar postagem!"));
            }
        }catch (Exception exception){
            throw new RuntimeException(exception);
        }
    }

    public Page<PostModel> getAllPostByUsername(String token, Pageable pageable){
        try {
            return repository.findPostsByToken(extractToken.extractUsernameToken(token), pageable);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public ResponseEntity<Map<String, String>> deletePost(String token, Long id){
        try {
            Optional<PostModel> foundPost = repository.findById(id);
            Optional<UserModel> foundUser = userRepository.findByUsername(extractToken.extractUsernameToken(token));
            if(!foundPost.isEmpty() && foundPost.get().getUser() == foundUser.get()){
                repository.delete(foundPost.get());
                return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(Map.of("success", "Postagem excluída com sucesso!"));
            }else{
                return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(Map.of("error", "Erro ao excluir postagem!"));
            }
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
