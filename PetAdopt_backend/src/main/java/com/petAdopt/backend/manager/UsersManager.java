package com.petAdopt.backend.manager;

import com.petAdopt.backend.dao.PetsRepo;
import com.petAdopt.backend.dao.UsersRepo;
import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.dao.entity.Users;
import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsersManager {

    private UsersRepo usersRepo;

    @Autowired
    public UsersManager(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
    }

    public Optional<Users> findById(Integer id){
        return usersRepo.findById(id);
    }

    public Iterable<Users> findAll(){
        return usersRepo.findAll();
    }

    public Users save (Users users){
        return usersRepo.save(users);
    }

    public void deleteById (Integer id){
        usersRepo.deleteById(id);
    }
}
