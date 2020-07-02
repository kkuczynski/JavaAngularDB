package com.petAdopt.backend.manager;

import com.petAdopt.backend.dao.AdoptionHousesRepo;
import com.petAdopt.backend.dao.entity.AdoptionHouses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdoptionHousesManager {

    private AdoptionHousesRepo adoptionHousesRepo;

    @Autowired
    public AdoptionHousesManager(AdoptionHousesRepo adoptionHousesRepo){
        this.adoptionHousesRepo = adoptionHousesRepo;
    }

    public Optional<AdoptionHouses> findById(Integer id){
        return adoptionHousesRepo.findById(id);
    }

    public Iterable<AdoptionHouses> findAll(){
        return adoptionHousesRepo.findAll();
    }

    public AdoptionHouses save (AdoptionHouses adoptionHouses){
        return adoptionHousesRepo.save(adoptionHouses);
    }

    public void deleteById (Integer id){
        adoptionHousesRepo.deleteById(id);
    }
}
