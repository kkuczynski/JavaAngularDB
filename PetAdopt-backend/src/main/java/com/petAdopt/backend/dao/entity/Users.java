package com.petAdopt.backend.dao.entity;

import com.petAdopt.backend.dao.enums.Role;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

@Data
@Entity
public class Users {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Integer id;
    private String name;
    private String surname;
    private Date createdAt;
    private Role role;
    private String login;
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
