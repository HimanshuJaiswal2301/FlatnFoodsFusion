package com.example.Flats.Food_Fusion.Model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;

@NamedQuery(name="Product.getAllProducts",query = "select new com.example.CafeManagementbackend.wrapper.ProductWrapper(p.id,p.name,p.description,p.price,p.status) from Product p")
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
    private String ownername;
    private String address;
    private Integer price;
    private String foodUrl;
}

