package com.petAdopt.backend.service;

import com.petAdopt.backend.dao.body.LoginBody;
import com.petAdopt.backend.dao.entity.Users;
import com.petAdopt.backend.exception.NoRecordWithIdException;

import java.util.List;

public interface UsersService {

    Users getUserById(Integer id) throws NoRecordWithIdException;

    List<Users> getAllUsers();

    boolean saveUser(Users users);

    boolean updateUser(Users users) throws NoRecordWithIdException;

    void deleteUserById(Integer id) throws NoRecordWithIdException;

    Users loginUser(LoginBody loginBody) throws NoRecordWithIdException;
}
