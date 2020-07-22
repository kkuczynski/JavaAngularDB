package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.service.impl.AdoptionHousesServiceImpl;
import com.petAdopt.backend.service.impl.UsersServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UsersController {

    private final UsersServiceImpl usersServiceImpl;
    private final AdoptionHousesServiceImpl adoptionHousesServiceImpl;

    public UsersController(UsersServiceImpl usersServiceImpl, AdoptionHousesServiceImpl adoptionHousesServiceImpl){
        this.usersServiceImpl = usersServiceImpl;
        this.adoptionHousesServiceImpl = adoptionHousesServiceImpl;
    }

    @GetMapping()
    public List<Users> getAll(){
        return usersServiceImpl.getAllUsers();
    }

    @GetMapping("/{id}")
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

        adoptionHousesServiceImpl.deleteAdoptionHouseByUserId(id);
        usersServiceImpl.deleteUserById(id);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody String username, String password) throws NoRecordWithIdException{
        return usersServiceImpl.loginUser(username, password);
    }
}


