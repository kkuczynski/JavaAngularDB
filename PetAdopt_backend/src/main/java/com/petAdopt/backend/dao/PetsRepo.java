package com.petAdopt.backend.dao;


import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetsRepo extends CrudRepository<Pets,Integer> {
}
