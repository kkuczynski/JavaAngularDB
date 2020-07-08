package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;

// Zobacz czy nie da się tego zaimplmentować globalnie na całą apke ;)
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UsersController {


// publiczne ?
    UsersService usersService;


    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping()
    public Iterable<Users> getAll(){
        return usersService.findAll();
    }

// w path id
    @GetMapping("/byId")
    public Users getById(@RequestParam Integer index) throws Exception{
       return usersService.findById(index);
    }

    @PostMapping
    public Users addUsers(@RequestBody Users user){
        return usersService.save(user);
    }

    @PutMapping
    public Users updateUsers(@RequestBody Users user){
        return usersService.save(user);
    }

    @DeleteMapping
    public void deleteUsers(@RequestParam int index){
       usersService.deleteById(index);
    }
}


