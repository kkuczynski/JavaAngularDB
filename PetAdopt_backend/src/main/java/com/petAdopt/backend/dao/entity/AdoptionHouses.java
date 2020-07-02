package com.petAdopt.backend.dao.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdoptionHouses {
    public AdoptionHouses(Integer id, String address, String city, String postcode, int user_id, int pets_id, String conditions){
        this.id = id;
        this.address = address;
        this.city = city;
        this.postcode = postcode;
        this.user_id = user_id;
        this.pets_id = pets_id;
        this.conditions = conditions;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id

    private Integer id;
    private String address;
    private String city;
    private String postcode;
    private int user_id;
    private int pets_id;
    private String conditions;

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

    public int getUser_id(){
        return user_id;
    }

    public void setUser_id(int user_id){
        this.user_id = user_id;
    }

    public int getPets_id(){
        return pets_id;
    }

    public void setPets_id(int pets_id){
        this.pets_id = pets_id;
    }

    public String getConditions(){
        return conditions;
    }

    public void setConditions(String conditions){
        this.conditions = conditions;
    }
}
