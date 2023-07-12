package br.com.ecogreen.ecogreenbackend.controllers;

import br.com.ecogreen.ecogreenbackend.dto.CreatePostDTO;
import br.com.ecogreen.ecogreenbackend.models.PostModel;
import br.com.ecogreen.ecogreenbackend.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService service;

    @PostMapping("/create-post")
    @Secured("ROLE_USER")
    public ResponseEntity<Map<String, String>> createPost(@RequestHeader("authorization") String token,
                                                         @RequestBody CreatePostDTO dto){
        return service.createPost(token, dto);
    }

    @PutMapping("/edit-post/{id}")
    @Secured("ROLE_USER")
    public ResponseEntity<Map<String, String>> updatePost(@RequestHeader("authorization") String token,
                                                          @PathVariable Long id,
                                                          @RequestBody CreatePostDTO dto){
        return service.updatePost(token, id, dto);
    }

    @GetMapping("/get-posts")
    @Secured("ROLE_USER")
    public Page<PostModel> getPosts(@RequestHeader("authorization") String token,
                                    @RequestParam(defaultValue = "0") int page,
                                    @RequestParam(defaultValue = "10") int size){

        return service.getAllPostByUsername(token, PageRequest.of(page, size));

    }

    @DeleteMapping("/delete-post/{id}")
    @Secured("ROLE_USER")
    public ResponseEntity<Map<String, String>> deletePost(@RequestHeader("authorization") String token,
                                                          @PathVariable Long id){
        return service.deletePost(token, id);
    }
}
