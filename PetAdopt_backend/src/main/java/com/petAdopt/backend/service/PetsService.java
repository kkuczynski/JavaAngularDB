package com.petAdopt.backend.service;

import com.petAdopt.backend.repo.PetsRepo;
import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.time.LocalDate;
import java.util.List;



public class PetsService {

    private PetsRepo petsRepo;

    @Autowired
    public PetsService(PetsRepo petsRepo){
        this.petsRepo = petsRepo;
    }

    public Pets findById(Integer id) throws Exception{
        return petsRepo.findById(id).orElseThrow(Exception::new);
    }

    public List<Pets> findAll(){
        return (List<Pets>) petsRepo.findAll();
    }

    public Pets save (Pets pets){
        return petsRepo.save(pets);
    }

    public void deleteById (Integer id){
        petsRepo.deleteById(id);
    }

}