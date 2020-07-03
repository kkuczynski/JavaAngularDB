package com.petAdopt.backend.dao.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Pets {

    public Pets(Integer id, String name, String spieces, String race, int age, String health, String sex, Boolean sterilized, Boolean adopted, LocalDate adoptDate, Boolean temporaryAdopted, int tmpAdoptForDays){
        this.id = id;
        this.name = name;
        this.spieces = spieces;
        this.race = race;
        this.age = age;
        this.health = health;
        this.sex = sex;
        this.sterilized = sterilized;
        this.adopted = adopted;
        this.adoptDate = adoptDate;
        this.temporaryAdopted = temporaryAdopted;
        this.tmpAdoptForDays = tmpAdoptForDays;
    }

    public Pets(){
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id

    private Integer id;
    private String name;
    private String spieces; //dog, cat etc
    private String race;//race of the spieces
    private int age;//age of the pet given in months
    private String health;//the description of health status of the pet
    private String sex;//male/female
    private Boolean sterilized;
    private Boolean adopted;
    private LocalDate adoptDate;
    private Boolean temporaryAdopted;
    private int tmpAdoptForDays;//when permanently adopted set to -1

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getSpieces(){
        return spieces;
    }

    public void setSpieces(String spieces){
        this.spieces = spieces;
    }

    public String getRace(){
        return race;
    }

    public void setRace(String race){
        this.race = race;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public String getHealth(){
        return health;
    }

    public void setHealth(String health){
        this.health = health;
    }

    public String getSex(){
        return sex;
    }

    public void setSex(String sex){
        this.sex = sex;
    }

    public Boolean getSterilized(){
        return sterilized;
    }

    public void setSterilized(Boolean sterilized){
        this.sterilized = sterilized;
    }

    public Boolean getAdopted(){
        return adopted;
    }

    public void setAdopted(Boolean adopted){
        this.adopted = adopted;
    }

    public LocalDate getAdoptDate(){
        return adoptDate;
    }

    public void setAdoptDate(LocalDate adoptDate){
        this.adoptDate = adoptDate;
    }

    public Boolean getTemporaryAdopted(){
        return temporaryAdopted;
    }

    public void setTemporaryAdopted(Boolean temporaryAdopted){
        this.temporaryAdopted = temporaryAdopted;
    }

    public int getTmpAdoptForDays(){
        return tmpAdoptForDays;
    }

    public void setTmpAdoptForDays(int tmpAdoptForDays){
        this.tmpAdoptForDays = tmpAdoptForDays;
    }
}


