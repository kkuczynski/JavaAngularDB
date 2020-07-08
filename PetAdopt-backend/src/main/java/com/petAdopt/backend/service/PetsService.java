package com.petAdopt.backend.service;

import com.petAdopt.backend.repo.PetsRepo;
import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PetsService implements ServiceInterface {

    private PetsRepo petsRepo;

    public PetsService(PetsRepo petsRepo){
        this.petsRepo = petsRepo;
    }

    public Pets getPetById(Integer id) throws Exception{
        return petsRepo.findById(id).orElseThrow(Exception::new);
    }

    public List<Pets> getAllPets(){
        return (List<Pets>) petsRepo.findAll();
    }

    public Pets savePet(Pets pets){
        return petsRepo.save(pets);
    }

    public void deletePetById(Integer id){
        petsRepo.deleteById(id);
    }

}