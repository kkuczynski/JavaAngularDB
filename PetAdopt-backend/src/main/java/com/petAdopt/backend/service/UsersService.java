package com.petAdopt.backend.service;

import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.exception.NoRecordWithIdException;

import java.util.List;
//Formatowanie
public interface UsersService {
    Users getUserById(Integer id) throws NoRecordWithIdException;
    List<Users> getAllUsers();
    Users saveUser(Users users);
    void deleteUserById(Integer id) throws NoRecordWithIdException;
}
