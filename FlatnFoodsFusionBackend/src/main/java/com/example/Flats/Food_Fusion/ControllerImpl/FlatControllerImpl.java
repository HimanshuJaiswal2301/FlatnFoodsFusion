package com.example.Flats.Food_Fusion.ControllerImpl;

import com.example.Flats.Food_Fusion.Model.Flat;
import com.example.Flats.Food_Fusion.ServiceImpl.FlatServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flat")

@CrossOrigin("*")
public class FlatControllerImpl {
    private final FlatServiceImpl flatService;

    public FlatControllerImpl(FlatServiceImpl flatService) {
        this.flatService = flatService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Flat>> getAllFlats(){
        List<Flat> flats = flatService.findallFlats();
        return new ResponseEntity<>(flats, HttpStatus.OK);
    }

    @GetMapping("/flat/{id}")
    public ResponseEntity<Flat> getFlatById(@PathVariable("id")int id){
        Flat flat = flatService.findFlatById(id);
        return new ResponseEntity<>(flat,HttpStatus.OK);
    }

    @PostMapping("/add")


    public ResponseEntity<Flat> addFlat(@RequestBody  Flat flat){
        Flat newFlat = flatService.addFlat(flat);
        return new ResponseEntity<>(newFlat, HttpStatus.OK);
    }

}
