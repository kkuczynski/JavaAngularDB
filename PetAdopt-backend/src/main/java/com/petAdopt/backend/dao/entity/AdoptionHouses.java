package com.petAdopt.backend.dao.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
public class AdoptionHouses {

//    same gettery :O ?
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String address;
    private String city;
    private String postcode;
    private int userId;
    private String conditions;

    public AdoptionHouses(){
    }
}
