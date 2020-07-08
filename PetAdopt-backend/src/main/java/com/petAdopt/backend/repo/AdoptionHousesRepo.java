package com.petAdopt.backend.repo;

import com.petAdopt.backend.dao.entity.AdoptionHouses;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptionHousesRepo extends JpaRepository<AdoptionHouses,Integer> {

}
