package com.petAdopt.backend.api;

import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.manager.PetsManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Vector;


@RestController
@RequestMapping("/api/pets")
public class PetsApi {
    private PetsManager petsManager;
    @Autowired
    public PetsApi(PetsManager petsManager){
        this.petsManager = petsManager;
    }

    @GetMapping("/allpets")
    public Iterable<Pets> getAll(){
        return petsManager.findAll();
    }

    @GetMapping
    public Optional<Pets> getById(@RequestParam Integer index){
        return petsManager.findById(index);
    }

    @PostMapping
    public Pets addPets(@RequestBody Pets pet){
        return petsManager.save(pet);
    }

    @PutMapping
    public Pets updatePets(@RequestBody Pets pet){
        return petsManager.save(pet);
    }

    @DeleteMapping
    public void deletePets(@RequestParam int index){
        petsManager.deleteById(index);
    }
}

