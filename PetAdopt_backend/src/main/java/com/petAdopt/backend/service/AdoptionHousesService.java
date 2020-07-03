package com.petAdopt.backend.service;

import com.petAdopt.backend.repo.AdoptionHousesRepo;
import com.petAdopt.backend.dao.entity.AdoptionHouses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AdoptionHousesService {

    private AdoptionHousesRepo adoptionHousesRepo;

    @Autowired
    public AdoptionHousesService(AdoptionHousesRepo adoptionHousesRepo){
        this.adoptionHousesRepo = adoptionHousesRepo;
    }

    public AdoptionHouses findById(Integer id) throws Exception{
        return adoptionHousesRepo.findById(id).orElseThrow(Exception::new);
    }

    public List<AdoptionHouses> findAll(){
        return (List<AdoptionHouses>) adoptionHousesRepo.findAll();
    }

    public AdoptionHouses save (AdoptionHouses adoptionHouses){
        return adoptionHousesRepo.save(adoptionHouses);
    }

    public void deleteById (Integer id){
        adoptionHousesRepo.deleteById(id);
    }
}
