package com.petAdopt.backend.dao.entity;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
public class AdoptionHouses {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String address;
    private String city;
    private String postcode;
    private int userId;
    private int petsId;
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
