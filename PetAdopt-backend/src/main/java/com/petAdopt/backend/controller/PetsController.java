package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.service.impl.PetsServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/pets")

public class PetsController {
    private final PetsServiceImpl petsServiceImpl;

    public PetsController(PetsServiceImpl petsServiceImpl){
        this.petsServiceImpl = petsServiceImpl;

    }

    @GetMapping
    public List<Pets> getAllPets(){
        return petsServiceImpl.getAllPets();
    }

    @GetMapping("/withNoHome")
    public List<Pets> getPetsWithNoHome(){
        return petsServiceImpl.getAllPetsWithNoHome();
    }

    @GetMapping("/withHome")
    public List<Pets> getPetsWithHome(){
        return petsServiceImpl.getAllPetsWithHome();
    }

    @GetMapping("/{id}")
    public Pets getById(@PathVariable Integer id) throws NoRecordWithIdException{
        return petsServiceImpl.getPetById(id);
    }

    @PostMapping
    public Pets addPets(@RequestBody Pets pet){
        return petsServiceImpl.savePet(pet);
    }

    @PutMapping
    public Pets updatePets(@RequestBody Pets pet) throws NoRecordWithIdException{
        return petsServiceImpl.updatePets(pet);
    }

    @DeleteMapping("/{id}")
    public void deletePets(@PathVariable int id) throws NoRecordWithIdException{
        petsServiceImpl.deletePetById(id);
    }
}

