package com.petAdopt.backend.dao.entity;

import javax.persistence.*;

@Entity
//TODO Poczytać o Lomboku, Skróci kod
/*
* 1. Pola
* 2. Contruktor
* 3. Gettery Setter
* 4. Override
*/
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

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getAddress(){
        return address;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public String getCity(){
        return city;
    }

    public void setCity(String city){
        this.city = city;
    }

    public String getPostcode(){
        return postcode;
    }

    public void setPostcode(String postcode){
        this.postcode = postcode;
    }

    public int getUserId(){
        return userId;
    }

    public void setUserId(int userId){
        this.userId = userId;
    }

    public int getPetsId(){
        return petsId;
    }

    public void setPetsId(int petsId){
        this.petsId = petsId;
    }

    public String getConditions(){
        return conditions;
    }

    public void setConditions(String conditions){
        this.conditions = conditions;
    }
}
