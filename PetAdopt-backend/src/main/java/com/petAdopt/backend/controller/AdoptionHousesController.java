package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.service.AdoptionHousesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping("/adoptionHouses")
public class AdoptionHousesController {
    private final AdoptionHousesService adoptionHousesService;

    public AdoptionHousesController(AdoptionHousesService adoptionHousesService){
        this.adoptionHousesService = adoptionHousesService;
    }

    @GetMapping()
    public List<AdoptionHouses> getAll(){
        return adoptionHousesService.getAllAdoptionHouses();
    }

    @GetMapping("/{id}")
    public AdoptionHouses getById(@PathVariable Integer id)throws Exception{
        return adoptionHousesService.getAdoptionHouseById(id);
    }

    @PostMapping
    public AdoptionHouses addAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        return adoptionHousesService.saveAdoptionHouse(adoptionHouse);
    }

    @PutMapping
    public AdoptionHouses updateAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        //        tu powinna być metoda update
        return adoptionHousesService.saveAdoptionHouse(adoptionHouse);
    }

    @DeleteMapping("/{id}")
    public void deleteAdoptionHouses(@PathVariable Integer id){
        adoptionHousesService.deleteAdoptionHouseById(id);
    }
}
