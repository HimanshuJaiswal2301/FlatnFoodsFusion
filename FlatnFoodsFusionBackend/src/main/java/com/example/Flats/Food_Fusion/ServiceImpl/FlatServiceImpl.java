package com.example.Flats.Food_Fusion.ServiceImpl;

import com.example.Flats.Food_Fusion.Model.Flat;
import com.example.Flats.Food_Fusion.Repository.FlatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FlatServiceImpl {
    private final FlatRepo flatRepo;

    @Autowired
    public FlatServiceImpl(FlatRepo flatRepo) {
        this.flatRepo = flatRepo;
    }

   public Flat addFlat(Flat flat){
        return (Flat) flatRepo.save(flat);
   }
    public List<Flat> findallFlats (){
        return flatRepo.findAll();
    }

    public Flat findFlatById(int id){
        return flatRepo.findFlatFlatById(id);
    }
    public void deleteFlatById(int id){
        flatRepo.deleteFlatById(id);
    }
}
