package com.petAdopt.backend.service;

import com.petAdopt.backend.repo.AdoptionHousesRepo;
import com.petAdopt.backend.dao.entity.AdoptionHouses;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdoptionHousesService implements ServiceInterface {

    private final AdoptionHousesRepo adoptionHousesRepo;

    public AdoptionHousesService(AdoptionHousesRepo adoptionHousesRepo){
        this.adoptionHousesRepo = adoptionHousesRepo;
    }

    public AdoptionHouses getAdoptionHouseById(Integer id) throws Exception{
        return adoptionHousesRepo.findById(id).orElseThrow(Exception::new);
    }
    public List<AdoptionHouses> getAllAdoptionHouses(){
        return (List<AdoptionHouses>) adoptionHousesRepo.findAll();
    }

    public AdoptionHouses saveAdoptionHouse (AdoptionHouses adoptionHouses){
        return adoptionHousesRepo.save(adoptionHouses);
    }

    public void deleteAdoptionHouseById (Integer id){
        adoptionHousesRepo.deleteById(id);
    }
}
