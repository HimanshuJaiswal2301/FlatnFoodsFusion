package com.example.Flats.Food_Fusion.Repository;

import com.example.Flats.Food_Fusion.Model.User;
import com.example.Flats.Food_Fusion.Wrapper.UserWrapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {

    User findByEmailId(@Param("email") String email);
    List<UserWrapper>getAllUser();

    @Override
    Optional<User> findById(Integer integer);

    List<UserWrapper>getByUsername(@Param("username") String currentUser);
}
