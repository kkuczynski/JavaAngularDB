package com.petAdopt.backend.service.impl;

import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.repo.AdoptionHousesRepo;
import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.service.AdoptionHousesService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptionHousesServiceImpl implements AdoptionHousesService {

    private final String message = "AdoptionHouses";
    private final AdoptionHousesRepo adoptionHousesRepo;

    public AdoptionHousesServiceImpl(AdoptionHousesRepo adoptionHousesRepo){
        this.adoptionHousesRepo = adoptionHousesRepo;
    }

    public AdoptionHouses getAdoptionHouseById(Integer id) throws NoRecordWithIdException{
        return adoptionHousesRepo.findById(id).orElseThrow(() -> new NoRecordWithIdException(message));
    }

    public List<AdoptionHouses> getAllAdoptionHouses(){
        return adoptionHousesRepo.findAll();
    }

    public AdoptionHouses saveAdoptionHouse(AdoptionHouses adoptionHouses){
        return adoptionHousesRepo.save(adoptionHouses);
    }

    public void deleteAdoptionHouseById(Integer id) throws NoRecordWithIdException{

        try {
            adoptionHousesRepo.deleteById(id);
        } catch (Exception e) {
            throw new NoRecordWithIdException(message);
        }
    }

    public void deleteAdoptionHouseByUserId(Integer id) throws NoRecordWithIdException{
        try {
            adoptionHousesRepo.findAll().forEach((house) -> {
                if (house.getUserId() == id) {
                    adoptionHousesRepo.delete(house);
                }
            });
        } catch (Exception e) {
            throw new NoRecordWithIdException(message);
        }
    }

    public AdoptionHouses updateAdoptionHouse(AdoptionHouses adoptionHouses) throws NoRecordWithIdException{
        try {
            adoptionHousesRepo.findById(adoptionHouses.getId());
            return adoptionHousesRepo.save(adoptionHouses);
        } catch (Exception e) {
            throw new NoRecordWithIdException(message);

        }
    }
}


