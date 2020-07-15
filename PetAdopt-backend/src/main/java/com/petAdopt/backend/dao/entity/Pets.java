package com.petAdopt.backend.dao.entity;

import com.petAdopt.backend.dao.enums.Sex;
import com.petAdopt.backend.dao.enums.Spieces;
import lombok.Data;
import lombok.Getter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;
import java.time.LocalDate;

@Data
@Entity
public class Pets {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String name;
    private Spieces spieces;
    private String race;
    //age of the pet given in months
    private int age;
    //when the pet was added to db,
    private Date addedAt;
    //the description of health status of the pet
    private String health;
    //male/female
    private Sex sex;
    private Boolean sterilized;
    private Boolean adopted;
    private Date adoptDate;
    private Boolean temporaryAdopted;
    private int tmpAdoptForDays;

    public Pets(){
    }

    public Pets(Integer id, String name, Spieces spieces, String race, int age, Date addedAt, String health, Sex sex, Boolean sterilized, Boolean adopted, Date adoptDate, Boolean temporaryAdopted, int tmpAdoptForDays){
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

}

