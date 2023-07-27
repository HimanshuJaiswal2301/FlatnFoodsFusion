package com.example.Flats.Food_Fusion.Repository;

import com.example.Flats.Food_Fusion.Model.Flat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FlatRepo extends JpaRepository <Flat,Integer>{

    void deleteFlatById(int id);




    @Query("SELECT f FROM Flat f WHERE price >= ?1 AND price <= ?2")
    List<Flat> filterCustom(Integer startPrice, Integer endPrice);

    @Query("SELECT f FROM Flat f WHERE userId= ?1")
    List<Flat> getUserFlatsById(Integer id);

    @Query("SELECT f FROM Flat f WHERE description = ?1")
    List<Flat> getFlatsByCity(String cityName);
}
