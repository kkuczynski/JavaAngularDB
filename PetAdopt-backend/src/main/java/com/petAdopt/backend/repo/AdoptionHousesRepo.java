package com.petAdopt.backend.repo;

import com.petAdopt.backend.dao.entity.AdoptionHouses;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
//JpaRepository - poczytać o różnicach
public interface AdoptionHousesRepo extends CrudRepository<AdoptionHouses,Integer> {

}
