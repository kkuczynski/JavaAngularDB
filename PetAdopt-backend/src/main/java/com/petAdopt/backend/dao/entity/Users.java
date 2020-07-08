package com.petAdopt.backend.dao.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Users {
    public Users(Integer id, String fullName, Date createdAt, Role givenRole, String login, String pass){
        this.id = id;
        this.fullName = fullName;
        this.createdAt = createdAt;
        this.givenRole = givenRole;
        this.login = login;
        this.pass = pass;
    }

    public Users(){
    }

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id

    private Integer id;
//    rozbić na name, surname
    private String fullName;
    private Date createdAt;
//    Enumy trzymamy w osobnych pakietach, dao -> enums/
    private enum Role {
        ADMIN, COMMON_USER, EMPLOYEE;
    }
    private Role givenRole;
    private String login;
//    password -> atramentu tu Ci nie braknie
    private String pass;

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getFullName(){
        return fullName;
    }

    public void setFullName(String fullName){
        this.fullName = fullName;
    }

    public Date getCreatedAt(){
        return createdAt;
    }

    public void setCreatedAt(Date createdAt){
        this.createdAt = createdAt;
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
