package com.petAdopt.backend.dao.body;

import lombok.Data;

//masz lomboka od wszystkieg :)
@Data
public class LoginBody {

    String username;
    String password;

    LoginBody(String username, String password) {
        this.username = username;
        this.password = password;
    }

    LoginBody(){}
}
