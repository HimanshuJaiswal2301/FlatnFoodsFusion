package com.example.Flats.Food_Fusion.ControllerImpl;

import com.example.Flats.Food_Fusion.Model.Flat;
import com.example.Flats.Food_Fusion.ServiceImpl.FlatServiceImpl;
import jakarta.transaction.Transactional;
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



    @PostMapping("/add")


    public ResponseEntity<Flat> addFlat(@RequestBody  Flat flat){
        Flat newFlat = flatService.addFlat(flat);
        return new ResponseEntity<>(newFlat, HttpStatus.OK);
    }

    @Transactional
    @GetMapping("/filter/custom/{startPrice}/{endPrice}")
    public ResponseEntity<List<Flat>> filterCustom(@PathVariable ("startPrice") Integer startPrice, @PathVariable ("endPrice") Integer endPrice){
        List<Flat> flats = flatService.filterCustom(startPrice, endPrice);
        return new ResponseEntity<>(flats, HttpStatus.OK);
    }
    @Transactional
    @GetMapping("/userFlats/{id}")
    public ResponseEntity<List<Flat>> getUserFlatsById(@PathVariable("id") Integer id){
        List<Flat> flats = flatService.getUserFlatsById(id);
        return new ResponseEntity<>(flats, HttpStatus.OK);
    }

    @Transactional
    @GetMapping("/filter/city/{cityName}")
    public ResponseEntity<List<Flat>> getFlatsByCity(@PathVariable("cityName") String cityName){
        List<Flat> flats = flatService.getFlatsByCity(cityName);
        return new ResponseEntity<>(flats, HttpStatus.OK);
    }

}
