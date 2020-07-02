package com.petAdopt.backend.model;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;
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

    @GetMapping
    public Users getById(@RequestParam int index){
        Optional<Users> first = usersVector.stream().
                filter(element->element.getId() == index).findFirst();
        return first.get();
    }

    @PostMapping
    public boolean addUsers(@RequestBody Users user){
        return usersVector.add(user);
    }

    @PutMapping
    public boolean updateUsers(@RequestBody Users user){
        return usersVector.add(user);
    }

    @DeleteMapping
    public boolean deleteUsers(@RequestParam int index){
        return usersVector.removeIf(element -> element.getId() == index);
    }
}


