package com.petAdopt.backend.api;


import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.manager.AdoptionHousesManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Vector;
@RestController
@RequestMapping("/api/adoptionhouses")
public class AdoptionHousesApi {

    private AdoptionHousesManager adoptionHousesManager;

    @Autowired
    public AdoptionHousesApi (AdoptionHousesManager adoptionHousesManager){
        this.adoptionHousesManager = adoptionHousesManager;
    }

    @GetMapping("/alladoptionhouses")
    public Iterable<AdoptionHouses> getAll(){
        return adoptionHousesManager.findAll();
    }

    @GetMapping
    public Optional<AdoptionHouses> getById(@RequestParam Integer index){
        return adoptionHousesManager.findById(index);

    }

    @PostMapping
    public AdoptionHouses addAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        return adoptionHousesManager.save(adoptionHouse);
    }

    @PutMapping
    public AdoptionHouses updateAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        return adoptionHousesManager.save(adoptionHouse);
    }
    @DeleteMapping
    public void deleteAdoptionHouses(@RequestParam Integer index){
        adoptionHousesManager.deleteById(index);
    }
}
