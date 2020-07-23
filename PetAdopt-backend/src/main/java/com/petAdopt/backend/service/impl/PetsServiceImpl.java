package com.petAdopt.backend.service.impl;

import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.repo.PetsRepo;
import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.service.PetsService;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PetsServiceImpl implements PetsService {

    private final String message = "Pets";
    private PetsRepo petsRepo;

    public PetsServiceImpl(PetsRepo petsRepo){
        this.petsRepo = petsRepo;
    }

    public Pets getPetById(Integer id) throws NoRecordWithIdException{
            return petsRepo.findById(id).orElseThrow(() -> new NoRecordWithIdException(message));
    }

    public List<Pets> getAllPets(){
        return petsRepo.findAll();
    }

    public Pets savePet(Pets pets){
        return petsRepo.save(pets);
    }

    public void deletePetById(int id) throws NoRecordWithIdException{

        try {
            petsRepo.deleteById(id);
        }
        //        trochę ogólny exception
        catch(Exception e){
            throw new NoRecordWithIdException(message);
        }
    }

    public Pets updatePets(Pets pets) throws NoRecordWithIdException{
        try {
            petsRepo.findById(pets.getId());
            return petsRepo.save(pets);
        }
        //        trochę ogólny exception
        catch (Exception e) {
            throw new NoRecordWithIdException(message);
        }

    }

    public List<Pets> getAllPetsWithNoHome(){
        return this.petsRepo.findAll().stream().filter(pet -> !pet.getAdopted() && !pet.getTemporaryAdopted()).collect(Collectors.toList());
        }

    public List<Pets> getAllPetsWithHome(){
        return this.petsRepo.findAll().stream().filter(pet -> pet.getAdopted() || pet.getTemporaryAdopted()).collect(Collectors.toList());
    }

}