package com.petAdopt.backend.service.impl;

import com.petAdopt.backend.dao.body.LoginBody;
import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.repo.UsersRepo;
import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.service.UsersService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Objects;

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

    public boolean saveUser(Users users){
        boolean usernameIsUnique = true;
        for(Users foundUser: usersRepo.findAll())
            if (Objects.equals(foundUser.getLogin(), users.getLogin())){
                usernameIsUnique = false;
            }

        if(usernameIsUnique) {
            usersRepo.save(users);
            return true;
        }
        else {
            return false;
        }


    }

    public void deleteUserById(Integer id) throws NoRecordWithIdException{
        usersRepo.deleteById(id);
    }

    public boolean updateUser(Users users) throws NoRecordWithIdException{
        boolean usernameIsUnique = true;
        for (Users foundUser : usersRepo.findAll())
            if (Objects.equals(foundUser.getLogin(), users.getLogin())) {
                usernameIsUnique = false;
            }
        if (usernameIsUnique) {
            try {
                usersRepo.findById(users.getId());
                usersRepo.save(users);
                return true;

            } catch (Exception e) {
                throw new NoRecordWithIdException(message);
            }
        }
        else {
            return false;
        }
    }

    public Users loginUser(LoginBody loginBody) throws NoRecordWithIdException{
        Users foundUser = null;
        try {
             for(Users user: usersRepo.findAll()) {
                if (user.getLogin().equals(loginBody.getUsername()) && user.getPassword().equals(loginBody.getPassword())) {
                   foundUser = usersRepo.findById(user.getId()).orElseThrow(() -> new NoRecordWithIdException(message));
                }
            }
        } catch (Exception e) {
            throw new NoRecordWithIdException(message);
        }
        return foundUser;
    }
}
