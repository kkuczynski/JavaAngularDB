package com.petAdopt.backend.service.impl;

import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.repo.PetsRepo;
import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Vector;
import java.util.stream.Collectors;

@Service
public class PetsServiceImpl implements com.petAdopt.backend.service.PetsService {

    private PetsRepo petsRepo;

    public PetsServiceImpl(PetsRepo petsRepo){
        this.petsRepo = petsRepo;
    }

    public Pets getPetById(Integer id) throws NoRecordWithIdException{
            return petsRepo.findById(id).orElseThrow(() -> new NoRecordWithIdException("Pets"));
    }

    public List<Pets> getAllPets(){
        return petsRepo.findAll();
    }

    public Pets savePet(Pets pets){
        return petsRepo.save(pets);
    }

    public void deletePetById(Integer id) throws NoRecordWithIdException{
        try {
            getPetById(id);
            petsRepo.deleteById(id);
        }
        catch(NoRecordWithIdException e){
            throw new NoRecordWithIdException("Pets");
        }
    }

    public Pets updatePets(Pets pets) throws NoRecordWithIdException{
        try {
            getPetById(pets.getId());
            return petsRepo.save(pets);
        }
        catch (NoRecordWithIdException e) {
            throw new NoRecordWithIdException("Pets");
        }

    }



    public List<Pets> getAllPetsWithNoHome(){
        return this.petsRepo.findAll().stream().filter(pet -> !pet.getAdopted() && !pet.getTemporaryAdopted()).collect(Collectors.toList());
        }

    public List<Pets> getAllPetsWithHome(){
        return this.petsRepo.findAll().stream().filter(pet -> pet.getAdopted() || pet.getTemporaryAdopted()).collect(Collectors.toList());
    }

}