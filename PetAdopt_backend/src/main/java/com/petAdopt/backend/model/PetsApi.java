package com.petAdopt.backend.model;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Vector;


@RestController
@RequestMapping("/api/pets")
public class PetsApi {
    private Vector<Pets> petsVector;

    public PetsApi(){
        petsVector = new Vector<>();
    }

    @GetMapping("/allpets")
    public Vector<Pets> getAll(){
        return petsVector;
    }

    @GetMapping
    public Pets getById(@RequestParam int index){
        Optional<Pets> first = petsVector.stream().
                filter(element->element.getId() == index).findFirst();
        return first.get();
    }

    @PostMapping
    public boolean addPets(@RequestBody Pets pet){
        return petsVector.add(pet);
    }

    @PutMapping
    public boolean updatePets(@RequestBody Pets pet){
        return petsVector.add(pet);
    }

    @DeleteMapping
    public boolean deletePets(@RequestParam int index){
        return petsVector.removeIf(element -> element.getId() == index);
    }
}

