package com.petAdopt.model.dto;

import java.sql.Date;

public class PetsDto {
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
}
