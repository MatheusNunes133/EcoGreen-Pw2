package br.com.ecogreen.ecogreenbackend.controllers;

import br.com.ecogreen.ecogreenbackend.dto.DataUserDTO;
import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @PutMapping(value = "/update-user", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Secured("ROLE_USER")
    public ResponseEntity<Map<String, String>> updateUser(@RequestHeader("authorization") String token,
                                                         @ModelAttribute UserModel newUser,
                                                         @RequestParam(value = "image", required = false) MultipartFile newFile){
        return service.updateUser(token, newUser, newFile);
    }

    @GetMapping("/perfil")
    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    public DataUserDTO userPerfil(@RequestHeader("authorization") String token){
        return service.getUserJWT(token);
    }
}
