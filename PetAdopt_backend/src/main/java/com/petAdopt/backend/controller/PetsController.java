package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.service.PetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetsController {

    private PetsService petsService;

    @Autowired
    public PetsController(PetsService petsService){
        this.petsService = petsService;
//        new Pets(1,"Jasper","dog","mixed",13,"healthy","male", true, false, LocalDate.of(2019,6,8), true, 180));
//        new Pets(2,"Lena", "cat", "russian gray", 28, "healthy", "female", true, true, LocalDate.of(2017,12,10), false, -1));
    }

    @GetMapping("/test")
    public String getAll(){
        return "test";
    }
    @GetMapping
    public List<Pets> getAllPets(){
        return petsService.findAll();
    }

    @GetMapping("/byId")
    public Pets getById(@RequestParam Integer index) throws Exception{
        return petsService.findById(index);
    }

    @PostMapping
    public Pets addPets(@RequestBody Pets pet){
        return petsService.save(pet);
    }

    @PutMapping
    public Pets updatePets(@RequestBody Pets pet){
        return petsService.save(pet);
    }

    @DeleteMapping
    public void deletePets(@RequestParam int index){
        petsService.deleteById(index);
    }
}

