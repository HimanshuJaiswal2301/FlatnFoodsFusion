package com.example.Flats.Food_Fusion.Model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;

@NamedQuery(name="User.findByEmailId",query="select u from User u where u.email=:email")
@NamedQuery(name="User.getAllUser",query="select new com.example.Flats.Food_Fusion.Wrapper.UserWrapper(u.id,u.name,u.email,u.userName) from User u where u.role='user'")
@NamedQuery(name="User.getByUsername",query="select new com.example.Flats.Food_Fusion.Wrapper.UserWrapper(u.id,u.name,u.email,u.userName) from User u where u.email=:username")
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name="_user")
public class User implements Serializable {
    private static  final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;
    private String name;
    @Column(unique = true)
    private String userName;
    private String email;
    private String password;
    private String role;


}
