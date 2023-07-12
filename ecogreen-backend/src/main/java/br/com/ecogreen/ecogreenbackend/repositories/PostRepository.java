package br.com.ecogreen.ecogreenbackend.repositories;

import br.com.ecogreen.ecogreenbackend.models.PostModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<PostModel, Long> {

    @Query(value = "select post.*\n" +
            "from \"tb-post\" post, \"tb-user\" usuario\n" +
            "where usuario.username = :username and usuario.id = post.user_id", nativeQuery = true)
    Page<PostModel> findPostsByToken(@Param(value = "username") String username, Pageable pageable);

    @Query(value = "select * from \"tb-post\"", nativeQuery = true)
    Page<PostModel> getAllPosts(Pageable pageable);
}
