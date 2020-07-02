package com.petAdopt.backend.dao.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;
@Entity
public class Pets {
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
    private Date adopt_date;//if adopted permanently
    private Boolean temporary_adopted;
    private int tmp_adopt_for_days;//when permanently adopted set to -1

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

    public Date getAdopt_date(){
        return adopt_date;
    }

    public void setAdopt_date(Date adopt_date){
        this.adopt_date = adopt_date;
    }

    public Boolean getTemporary_adopted(){
        return temporary_adopted;
    }

    public void setTemporary_adopted(Boolean temporary_adopted){
        this.temporary_adopted = temporary_adopted;
    }

    public int getTmp_adopt_for_days(){
        return tmp_adopt_for_days;
    }

    public void setTmp_adopt_for_days(int tmp_adopt_for_days){
        this.tmp_adopt_for_days = tmp_adopt_for_days;
    }
}


