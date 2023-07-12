package br.com.ecogreen.ecogreenbackend.controllers;

import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService service;


    @GetMapping("/get-all-users")
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

    @PutMapping(value = "/update-user/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Secured("ROLE_ADMIN")
    public Map<String, String> updateUser(@PathVariable Long id,
                                          @ModelAttribute UserModel newUser,
                                          @RequestParam(value = "image", required = false) MultipartFile newFile){
        return service.updateUser(id, newUser, newFile);
    }
}
