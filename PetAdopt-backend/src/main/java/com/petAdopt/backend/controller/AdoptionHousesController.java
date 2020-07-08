package com.petAdopt.backend.controller;


import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.service.AdoptionHousesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
//camelCase
@RequestMapping("/adoptionhouses")
public class AdoptionHousesController {

//    final
    private AdoptionHousesService adoptionHousesService;

//    nie musi
    @Autowired
    public AdoptionHousesController(AdoptionHousesService adoptionHousesService){
        this.adoptionHousesService = adoptionHousesService;
    }

    @GetMapping()
    public List<AdoptionHouses> getAll(){
        return adoptionHousesService.findAll();
    }

//    W pathu przekazać id
    @GetMapping("/byId")
    public AdoptionHouses getById(@RequestParam Integer index)throws Exception{
        return adoptionHousesService.findById(index);

    }

    @PostMapping
    public AdoptionHouses addAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        return adoptionHousesService.save(adoptionHouse);
    }

    @PutMapping
    public AdoptionHouses updateAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        //        tu powinna być metoda update
        return adoptionHousesService.save(adoptionHouse);
    }

    @DeleteMapping
    public void deleteAdoptionHouses(@RequestParam Integer index){
        adoptionHousesService.deleteById(index);
    }
}
