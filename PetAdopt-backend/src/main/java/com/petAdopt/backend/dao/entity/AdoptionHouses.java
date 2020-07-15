package com.petAdopt.backend.dao.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
public class AdoptionHouses {

//    same gettery :O ?
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Getter
    private Integer id;
    @Getter
    private String address;
    @Getter
    private String city;
    @Getter
    private String postcode;
    @Getter
    private int userId;
    @Getter
    private int petsId;
    @Getter
    private String conditions;

    public AdoptionHouses(Integer id, String address, String city, String postcode, int userId, int petsId, String conditions){
        this.id = id;
        this.address = address;
        this.city = city;
        this.postcode = postcode;
        this.userId = userId;
        this.petsId = petsId;
        this.conditions = conditions;
    }

    public AdoptionHouses(){
    }
}
