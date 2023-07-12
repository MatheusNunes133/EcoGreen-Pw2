package br.com.ecogreen.ecogreenbackend.services;

import br.com.ecogreen.ecogreenbackend.websecurity.jwt.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ExtractUsernameTokenJWT {
    @Autowired
    private JWTService jwtService;

    public String extractUsernameToken(String token){
        return Optional.ofNullable(token)
                .stream()
                .filter(header-> header.startsWith("Bearer "))
                .findFirst()
                .map(foundItem -> foundItem.substring(7))
                .map(jwtService::extractUsername)
                .orElse(null);
    }
}
