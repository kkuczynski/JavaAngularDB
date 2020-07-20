package com.petAdopt.backend.service.impl;

import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.repo.UsersRepo;
import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.service.UsersService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {

    private final String message = "Users";
    private UsersRepo usersRepo;

    public UsersServiceImpl(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
    }

    public Users getUserById(Integer id) throws NoRecordWithIdException{
        return usersRepo.findById(id).orElseThrow(() -> new NoRecordWithIdException(message));
    }

    public List<Users> getAllUsers(){
        return usersRepo.findAll();
    }

    public Users saveUser(Users users){
        return usersRepo.save(users);
    }

    public void deleteUserById(Integer id) throws NoRecordWithIdException{
        try {
            usersRepo.deleteById(id);
        }
        catch(Exception e){
            throw new NoRecordWithIdException(message);
        }
    }

    public Users updateUsers(Users users) throws NoRecordWithIdException{
        try {
            usersRepo.findById(users.getId());
            return usersRepo.save(users);

        } catch (Exception e) {
            throw new NoRecordWithIdException(message);
        }
    }
}
