package com.petAdopt.backend.dao.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;
@Entity
public class Users {
    public Users(Integer id, String full_name, Timestamp created_at, int role, String login, String pass){
        this.id = id;
        this.full_name = full_name;
        this.created_at = created_at;
        this.role = role;
        this.login = login;
        this.pass = pass;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id

    private Integer id;
    private String full_name;
//    Może Date?
    private Timestamp created_at;

//   Na enumie takie rzeczy
    private int role; //0 - admin, 1 - employee, 2 - common user
    private String login;
    private String pass;

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getFull_name(){
        return full_name;
    }

    public void setFull_name(String full_name){
        this.full_name = full_name;
    }

    public Timestamp getCreated_at(){
        return created_at;
    }

    public void setCreated_at(Timestamp created_at){
        this.created_at = created_at;
    }

    public int getRole(){
        return role;
    }

    public void setRole(int role){
        this.role = role;
    }

    public String getLogin(){
        return login;
    }

    public void setLogin(String login){
        this.login = login;
    }

    public String getPass(){
        return pass;
    }

    public void setPass(String pass){
        this.pass = pass;
    }
}
