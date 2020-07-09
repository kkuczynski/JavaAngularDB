package com.petAdopt.backend.dao.entity;

import com.petAdopt.backend.dao.enums.Sex;
import com.petAdopt.backend.dao.enums.Spieces;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Pets {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String name;
    //dog, cat etc
    private Spieces spieces;
    //race of the spieces
    private String race;
     //age of the pet given in months
    private int age;
    //TODO    proponuje typ Date ale sformatowany do yyyy-mm-dd
    private LocalDate addedAt; //when the pet was added to db,
    private String health;//the description of health status of the pet
    private Sex sex;//male/female
    private Boolean sterilized;
    private Boolean adopted;
    //    to samo co w przypadku dodanie
    private LocalDate adoptDate;
    private Boolean temporaryAdopted;
    private int tmpAdoptForDays;

    public Pets(){
    }

    public Pets(Integer id, String name, Spieces spieces, String race, int age, LocalDate addedAt, String health, Sex sex, Boolean sterilized, Boolean adopted, LocalDate adoptDate, Boolean temporaryAdopted, int tmpAdoptForDays){
        this.id = id;
        this.name = name;
        this.spieces = spieces;
        this.race = race;
        this.age = age;
        this.addedAt = addedAt;
        this.health = health;
        this.sex = sex;
        this.sterilized = sterilized;
        this.adopted = adopted;
        this.adoptDate = adoptDate;
        this.temporaryAdopted = temporaryAdopted;
        this.tmpAdoptForDays = tmpAdoptForDays;
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public Spieces getSpieces(){
        return spieces;
    }

    public void setSpieces(Spieces spieces){
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

    public LocalDate getAddedAt(){
        return addedAt;
    }

    public void setAddedAt(LocalDate addedAt){
        this.addedAt = addedAt;
    }

    public String getHealth(){
        return health;
    }

    public void setHealth(String health){
        this.health = health;
    }

    public Sex getSex(){
        return sex;
    }

    public void setSex(Sex sex){
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


