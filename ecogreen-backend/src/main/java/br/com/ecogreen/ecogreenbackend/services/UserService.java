package br.com.ecogreen.ecogreenbackend.services;

import br.com.ecogreen.ecogreenbackend.dto.DataUserDTO;
import br.com.ecogreen.ecogreenbackend.dto.RegisterDTO;
import br.com.ecogreen.ecogreenbackend.enums.EnumRoles;
import br.com.ecogreen.ecogreenbackend.models.UserModel;
import br.com.ecogreen.ecogreenbackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.Base64;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private ExtractUsernameTokenJWT extractUsername;

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

    public Map<String, String> updateUser(String token, UserModel newUser, MultipartFile file){
        try {
            Optional<UserModel> foundUser = repository.findByUsername(extractUsername.extractUsernameToken(token));

            if (!foundUser.isEmpty()) {
                foundUser.get().setUsername(newUser.getUsername());
                foundUser.get().setName(newUser.getName());
                foundUser.get().setPassword(new BCryptPasswordEncoder().encode(newUser.getPassword()));
                if (!file.isEmpty()) {
                    foundUser.get().setPerfil(file.getBytes());
                } else {
                    foundUser.get().setPerfil(null);
                }
                repository.save(foundUser.get());
                return Map.of("success", "Usuário atualizado com sucesso!");
            }else{
                return Map.of("error","Erro ao atualizar usuário!");
            }

        }catch (IOException exception){
            throw new RuntimeException(exception);
        }
    }

    public DataUserDTO getUserJWT(String token){

        UserModel foundUser = repository.findUserByToken(extractUsername.extractUsernameToken(token));
        return makeDataUserDTO(foundUser);
    }

    public static DataUserDTO makeDataUserDTO(UserModel userModel){
        DataUserDTO dto = new DataUserDTO();
        dto.setId(userModel.getId());
        dto.setName(userModel.getName());
        dto.setUsername(userModel.getUsername());
        if(userModel.getPerfil() != null){
            String base64Image = Base64.getEncoder().encodeToString(userModel.getPerfil());
            dto.setImageBase64(base64Image);
        }
        return dto;
    }
}
