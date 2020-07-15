package com.petAdopt.backend.dao.entity;

import com.petAdopt.backend.dao.enums.Role;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Users {
    //    same gettery :O ?
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Getter
    private Integer id;
    @Getter
    private String name;
    @Getter
    private String surname;
    @Getter
    private Date createdAt;
    @Getter
    private Role role;
    @Getter
    private String login;
    @Getter
    private String password;

    public Users(){
    }

    public Users(Integer id, String name, String surname, Date createdAt, Role role, String login, String password){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.createdAt = createdAt;
        this.role = role;
        this.login = login;
        this.password = password;
    }


}
