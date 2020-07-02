package com.petAdopt.model.dto;

import com.sun.org.apache.xpath.internal.operations.Bool;

import java.sql.Date;

public class PetsDto {
private
    int id;
    String name;
    String spieces; //dog, cat etc
    String race;//race of the spieces
    int age;//age of the pet given in months
    String health;//the description of health status of the pet
    String sex;//male/female
    Boolean sterilized;
    Boolean adopted;
    Date adopt_date;//if adopted permanently
    Boolean temporary_adopted;
    int tmp_adopt_for_days;//when permanently adopted set to -1
public
    int getId(){
        return this.id;
    }
    String getName(){
        return this.name;
    }
    String getSpieces(){
        return this.spieces;
    }
    String getRace(){
        return this.race;
    }
    int getAge() {
        return this.age;
    }
    String getHealth(){
        return this.health;
    }
    String getSex(){
        return this.sex;
    }
    Boolean getSterilized(){
        return this.sterilized;
    }
    Boolean getAdopted(){
        return this.adopted;
    }
    Date getAdopt_date(){
        return this.adopt_date;
    }
    Boolean getTemporary_adopted(){
        return this.temporary_adopted;
    }
    int getTmp_adopt_for_days(){
        return this.tmp_adopt_for_days;
    }
    void setId(){

    }
    void setName(){

    }
    void setSpieces(){

    }
    void setRace(){

    }
    void setAge(){

    }
    void setHealth(){

    }
    void setSex(){

    }
    void setSterilized(){

    }
    void setAdopted(){

    }
    void setAdopt_date(){

    }
    void setTemporary_adopted()
    {

    }
    void setTmp_adopt_for_days()
    {
        
    }
}
