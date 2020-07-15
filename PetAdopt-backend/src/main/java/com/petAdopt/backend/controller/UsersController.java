package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.service.impl.UsersServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UsersController {

    private final UsersServiceImpl usersServiceImpl;
    public UsersController(UsersServiceImpl usersServiceImpl){
        this.usersServiceImpl = usersServiceImpl;
    }

    @GetMapping()
    public List<Users> getAll(){
        return usersServiceImpl.getAllUsers();
    }

    @GetMapping("/{id}}")
    public Users getById(@PathVariable Integer id) throws NoRecordWithIdException{
       return usersServiceImpl.getUserById(id);
    }

    @PostMapping
    public Users addUsers(@RequestBody Users user){
        return usersServiceImpl.saveUser(user);
    }

    @PutMapping
    public Users updateUsers(@RequestBody Users user){
        return usersServiceImpl.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUsers(@PathVariable int id) throws NoRecordWithIdException{
       usersServiceImpl.deleteUserById(id);
    }

    @PostMapping("/login")
    public void login(){

    }
}


