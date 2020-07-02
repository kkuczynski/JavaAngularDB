package com.petAdopt.backend.dao;


import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.dao.entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends CrudRepository<Users,Integer> {
}
