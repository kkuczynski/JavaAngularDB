package com.petAdopt.backend.service.impl;

import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.repo.AdoptionHousesRepo;
import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.service.AdoptionHousesService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdoptionHousesServiceImpl implements AdoptionHousesService {

    private final AdoptionHousesRepo adoptionHousesRepo;

    public AdoptionHousesServiceImpl(AdoptionHousesRepo adoptionHousesRepo){
        this.adoptionHousesRepo = adoptionHousesRepo;
    }

    public AdoptionHouses getAdoptionHouseById(Integer id) throws NoRecordWithIdException{
        return adoptionHousesRepo.findById(id).orElseThrow(() -> new NoRecordWithIdException("AdoptionHouses"));
    }
    public List<AdoptionHouses> getAllAdoptionHouses(){
        return (List<AdoptionHouses>) adoptionHousesRepo.findAll();
    }

    public AdoptionHouses saveAdoptionHouse (AdoptionHouses adoptionHouses){
        return adoptionHousesRepo.save(adoptionHouses);
    }

    public void deleteAdoptionHouseById (Integer id) throws NoRecordWithIdException{

        try {
            getAdoptionHouseById(id);
            adoptionHousesRepo.deleteById(id);
        }
        catch(NoRecordWithIdException e){
            throw new NoRecordWithIdException("AdoptionHouse");
        }
    }

    public AdoptionHouses updateAdoptionHouse(AdoptionHouses adoptionHouses) throws NoRecordWithIdException{
        try {
            getAdoptionHouseById(adoptionHouses.getId());
            return adoptionHousesRepo.save(adoptionHouses);

        } catch (NoRecordWithIdException e) {
            throw new NoRecordWithIdException("AdoptionHouse");
        }
    }
}


