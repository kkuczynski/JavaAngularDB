package com.petAdopt.backend.manager;

import com.petAdopt.backend.dao.AdoptionHousesRepo;
import com.petAdopt.backend.dao.PetsRepo;
import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


public class PetsManager {

    private PetsRepo petsRepo;

    @Autowired
    public PetsManager(PetsRepo petsRepo){
        this.petsRepo = petsRepo;
    }

    public Optional<Pets> findById(Integer id){
        return petsRepo.findById(id);
    }

    public Iterable<Pets> findAll(){
        return petsRepo.findAll();
    }

    public Pets save (Pets pets){
        return petsRepo.save(pets);
    }

    public void deleteById (Integer id){
        petsRepo.deleteById(id);
    }
}