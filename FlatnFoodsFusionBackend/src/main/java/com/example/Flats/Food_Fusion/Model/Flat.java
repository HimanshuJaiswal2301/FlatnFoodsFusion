package com.example.Flats.Food_Fusion.Model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;

import java.io.Serializable;

@Data
@Entity
@DynamicInsert

public class Flat  implements Serializable {

    public static final long serialVersionUid=123456L;
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String owner_name;
    private String image;
    private Integer price;
    private Integer contact ;
    private String type;
}
