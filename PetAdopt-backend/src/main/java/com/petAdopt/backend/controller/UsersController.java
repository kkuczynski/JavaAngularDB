package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.service.UsersService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Zobacz czy nie da się tego zaimplmentować globalnie na całą apke ;)
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UsersController {

    private final UsersService usersService;
    public UsersController(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping()
    public List<Users> getAll(){
        return usersService.findAll();
    }

    @GetMapping("/{id}}")
    public Users getById(@PathVariable Integer id) throws Exception{
       return usersService.findById(id);
    }

    @PostMapping
    public Users addUsers(@RequestBody Users user){
        return usersService.save(user);
    }
    //zmienic na update
    @PutMapping
    public Users updateUsers(@RequestBody Users user){
        return usersService.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUsers(@PathVariable int id){
       usersService.deleteById(id);
    }
}


