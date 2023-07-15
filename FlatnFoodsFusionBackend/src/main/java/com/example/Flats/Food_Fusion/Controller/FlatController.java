package com.example.Flats.Food_Fusion.Controller;

import com.example.Flats.Food_Fusion.Wrapper.UserWrapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RequestMapping("/api/v1")
public interface FlatController {
    @PostMapping("/product/add")
    public ResponseEntity<String> addFLat(@RequestBody Map<String, String> requestMap);

    @GetMapping("/product/get")
    public ResponseEntity<List> getAllFlat();

//    @PostMapping("/product/update")
//    public ResponseEntity<String> updateFlat(@RequestBody Map<String, String> requestMap);

    @DeleteMapping("/product/delete/{id}")
    public ResponseEntity<String> deleteFlat(@PathVariable Integer id);
}