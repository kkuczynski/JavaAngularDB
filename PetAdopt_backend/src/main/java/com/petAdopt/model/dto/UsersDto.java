package com.petAdopt.model.dto;

import java.sql.Timestamp;

public class UsersDto {
    int id;
    String full_name;
    Timestamp created_at;
    int role; //0 - admin, 1 - employee, 2 - common user
}
