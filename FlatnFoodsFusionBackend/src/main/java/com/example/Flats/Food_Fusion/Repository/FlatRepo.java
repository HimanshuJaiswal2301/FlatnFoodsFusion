package com.example.Flats.Food_Fusion.Repository;

import com.example.Flats.Food_Fusion.Model.Flat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlatRepo extends JpaRepository {

    void deleteFlatById(int id);

    Flat findFlatFlatById(int id);
}
