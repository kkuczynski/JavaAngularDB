package com.petAdopt.backend.service.impl;

import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.repo.UsersRepo;
import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.service.UsersService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsersServiceImpl implements UsersService {

    private UsersRepo usersRepo;

    public UsersServiceImpl(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
    }

    public Users getUserById(Integer id) throws NoRecordWithIdException{
        return usersRepo.findById(id).orElseThrow(() -> new NoRecordWithIdException("Pets"));
    }

    public List<Users> getAllUsers(){
        return (List<Users>) usersRepo.findAll();
    }

    public Users saveUser(Users users){
        return usersRepo.save(users);
    }

    public void deleteUserById(Integer id) throws NoRecordWithIdException{
        try {
            getUserById(id);
            usersRepo.deleteById(id);
        }
        catch(NoRecordWithIdException e){
            throw new NoRecordWithIdException("Users");
        }
    }

    public Users updateUsers(Users users) throws NoRecordWithIdException{
        try {
            getUserById(users.getId());
            return usersRepo.save(users);

        } catch (NoRecordWithIdException e) {
            throw new NoRecordWithIdException("Users");
        }
    }
}
