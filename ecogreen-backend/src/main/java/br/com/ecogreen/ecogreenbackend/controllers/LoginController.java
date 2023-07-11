package br.com.ecogreen.ecogreenbackend.controllers;

import br.com.ecogreen.ecogreenbackend.dto.LoginDTO;
import br.com.ecogreen.ecogreenbackend.dto.RegisterDTO;
import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.services.UserService;
import br.com.ecogreen.ecogreenbackend.websecurity.UserDetailsServiceImpl;
import br.com.ecogreen.ecogreenbackend.websecurity.jwt.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private UserDetailsServiceImpl userDetails;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginDTO loginDTO){
        UserModel foundUser = userDetails.loadUserByUsername(loginDTO.getUsername());
        return Optional.ofNullable(foundUser)
                .filter(u -> new BCryptPasswordEncoder().matches(loginDTO.getPassword(), u.getPassword()))
                .map(jwtService::generateToken)
                .map(token -> ResponseEntity.ok().body(Map.of("token", token )))
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Usuário não encontrado ou credenciais inválidas")));
    }

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody RegisterDTO registerDTO){
        return userService.register(registerDTO);
    }
}
