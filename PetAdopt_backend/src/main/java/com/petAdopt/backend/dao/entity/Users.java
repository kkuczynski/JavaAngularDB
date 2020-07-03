package com.petAdopt.backend.dao.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Users {
    public Users(Integer id, String full_name, Date created_at, Role givenRole, String login, String pass){
        this.id = id;
        this.full_name = full_name;
        this.created_at = created_at;
        this.givenRole = givenRole;
        this.login = login;
        this.pass = pass;
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id

    private Integer id;
    private String full_name;
    private Date created_at;
    private enum Role {
        ADMIN, COMMON_USER, EMPLOYEE;
    }
    private Role givenRole;
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

    public Date getCreated_at(){
        return created_at;
    }

    public void setCreated_at(Date created_at){
        this.created_at = created_at;
    }

    public Role getRole(){
        return givenRole;
    }

    public void setRole(Role givenRole){
        this.givenRole=givenRole;
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
