package br.com.ecogreen.ecogreenbackend.controllers;

import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/all-users")
    @Secured("ROLE_ADMIN")
    public Page<UserModel> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "10") int size){

        return service.getAllUsers(PageRequest.of(page, size));
    }

    @DeleteMapping("/delete-user/{id}")
    @Secured("ROLE_ADMIN")
    public Map<String, String> deleteUser(@PathVariable Long id){
        return service.deleteUser(id);
    }
}
