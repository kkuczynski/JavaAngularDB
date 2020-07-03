package com.petAdopt.backend.repo;


import com.petAdopt.backend.dao.entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepo extends CrudRepository<Users,Integer> {
}