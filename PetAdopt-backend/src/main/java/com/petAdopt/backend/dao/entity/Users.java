package com.petAdopt.backend.dao.entity;

import com.petAdopt.backend.dao.enums.Role;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Users {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String name;
    private String surname;
    private Date createdAt;
    private Role givenRole;
    private String login;
    private String password;

    public Users(){
    }

    public Users(Integer id, String name, String surname, Date createdAt, Role givenRole, String login, String password){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.createdAt = createdAt;
        this.givenRole = givenRole;
        this.login = login;
        this.password = password;
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getSurname(){
        return surname;
    }

    public void setSurname(String surname){
        this.surname = surname;
    }

    public Date getCreatedAt(){
        return createdAt;
    }

    public void setCreatedAt(Date createdAt){
        this.createdAt = createdAt;
    }

    public Role getGivenRole(){
        return givenRole;
    }

    public void setGivenRole(Role givenRole){
        this.givenRole = givenRole;
    }

    public String getLogin(){
        return login;
    }

    public void setLogin(String login){
        this.login = login;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
