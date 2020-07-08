package com.petAdopt.backend.repo;

import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
//To co w AdoptionRepo
public interface PetsRepo extends CrudRepository<Pets,Integer> {
}
