package com.petAdopt.backend.dao.entity;

import com.petAdopt.backend.dao.enums.Sex;
import com.petAdopt.backend.dao.enums.Spieces;
import lombok.Getter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Pets {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Getter
    private Integer id;
    @Getter
    private String name;
    //dog, cat etc
    @Getter
    private Spieces spieces;
    //race of the spieces
    @Getter
    private String race;
    //age of the pet given in months
    @Getter
    private int age;
    //TODO    proponuje typ Date ale sformatowany do yyyy-mm-dd
    @Getter
    private LocalDate addedAt; //when the pet was added to db,
    @Getter
    private String health;//the description of health status of the pet
    @Getter
    private Sex sex;//male/female
    @Getter
    private Boolean sterilized;
    @Getter
    private Boolean adopted;
    //    to samo co w przypadku dodanie
    @Getter
    private LocalDate adoptDate;
    @Getter
    private Boolean temporaryAdopted;
    @Getter
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

}

