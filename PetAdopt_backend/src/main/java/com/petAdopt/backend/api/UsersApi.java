package com.petAdopt.backend.api;

import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.manager.UsersManager;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Vector;
@RestController
@RequestMapping("/api/users")
public class UsersApi {


    /*
    * @GetMapping pobierający wszystkich userów powinnien byc wolny
    * @GetMapping pobierający konkretnego usera powinnien mieć w PATH id czyli @GetMapping("/{idUser}")
     */
    UsersManager usersManager;

    /* UserController*
    * UsersManager -> UsersService
     */
    public UsersApi(UsersManager usersManager){
        this.usersManager = usersManager;
    }

    @GetMapping("/allusers")
    public Iterable<Users> getAll(){
        return usersManager.findAll();
    }


    @GetMapping
    public Optional<Users> getById(@RequestParam Integer index){
       return usersManager.findById(index);
    }

    @PostMapping
    public Users addUsers(@RequestBody Users user){
        return usersManager.save(user);
    }

    @PutMapping
    public Users updateUsers(@RequestBody Users user){
        return usersManager.save(user);
    }

    @DeleteMapping
    public void deleteUsers(@RequestParam int index){
       usersManager.deleteById(index);
    }
}


