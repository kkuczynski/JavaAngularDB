package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.service.PetsService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pets")
public class PetsController {
    private final PetsService petsService;

    public PetsController(PetsService petsService){
        this.petsService = petsService;

    }

    @GetMapping
    public List<Pets> getAllPets(){
        return petsService.getAllPets();
    }

    @GetMapping("/{id}")
    public Pets getById(@PathVariable Integer id) throws Exception{
        return petsService.getPetById(id);
    }

    @PostMapping
    public Pets addPets(@RequestBody Pets pet){
        return petsService.savePet(pet);
    }

    @PutMapping
    public Pets updatePets(@RequestBody Pets pet){
//        tu powinna być metoda update
        return petsService.savePet(pet);
    }

    @DeleteMapping("/{id}")
    public void deletePets(@PathVariable int id){
        petsService.deletePetById(id);
    }
}

