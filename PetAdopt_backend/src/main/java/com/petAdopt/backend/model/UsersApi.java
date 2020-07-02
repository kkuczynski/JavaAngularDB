package com.petAdopt.backend.model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Vector;
@RestController
@RequestMapping("/api/users")
public class UsersApi {
    private Vector<Users> usersVector;

    public UsersApi(){
        usersVector = new Vector<>();
    }
    @GetMapping("/allusers")
    public Vector<Users> getAll(){
        return usersVector;
    }
}

