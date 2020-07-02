package com.petAdopt.model.dto;

import java.sql.Timestamp;

public class UsersDto {
private
    int id;
    String full_name;
    Timestamp created_at;
    int role; //0 - admin, 1 - employee, 2 - common user
    String login;
    String pass;
public
    int getId(){
        return this.id;
    }
    String getFull_name(){
        return this.full_name;
    }
    Timestamp getCreated_at(){
        return this.created_at;
    }
    int getRole(){
        return this.role;
    }
    String getLogin(){
        return this.login;
    }
    String getPass(){
        return this.pass;
    }
    void setId(){

    }
    void setFull_name(){

    }
    void setCreated_at(){

    }
    void setRole(){

    }
    void setLogin(){

    }
    void setPass(){

    }
}
