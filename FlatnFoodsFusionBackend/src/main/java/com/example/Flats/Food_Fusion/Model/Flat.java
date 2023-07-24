package com.example.Flats.Food_Fusion.Model;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;


@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table
public class Flat implements Serializable {
    public static final long serialVersionUid=123456L;
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String description;
    private String address;
    private Integer price;
    private String food;
    private String type;
    private Integer contact;
    @Lob
    private String image;
    private String posted;
}
