package com.petAdopt.backend.service;

import com.petAdopt.backend.repo.UsersRepo;
import com.petAdopt.backend.dao.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsersService implements ServiceInterface{

    private UsersRepo usersRepo;

    public UsersService(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
    }

    public Users findById(Integer id) throws Exception{
        return usersRepo.findById(id).orElseThrow(Exception::new);
    }

    public List<Users> findAll(){
        return (List<Users>) usersRepo.findAll();
    }

    public Users save (Users users){
        return usersRepo.save(users);
    }

    public void deleteById (Integer id){
        usersRepo.deleteById(id);
    }
}
