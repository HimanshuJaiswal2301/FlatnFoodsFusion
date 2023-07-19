package com.example.Flats.Food_Fusion.Wrapper;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlatWrapper {
    private Integer id;
    private String name;
    private String description;
    private Integer price;
    private String status;
    public FlatWrapper(Integer id, String name){
        this.id=id;
        this.name=name;

    }
    public FlatWrapper(Integer id,String name,String description,Integer price){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
    }


}

