package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.exception.NoRecordWithIdException;
import com.petAdopt.backend.service.impl.AdoptionHousesServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping("/adoptionHouses")
public class AdoptionHousesController {
    private final AdoptionHousesServiceImpl adoptionHousesServiceImpl;

    public AdoptionHousesController(AdoptionHousesServiceImpl adoptionHousesServiceImpl){
        this.adoptionHousesServiceImpl = adoptionHousesServiceImpl;
    }

    @GetMapping()
    public List<AdoptionHouses> getAll(){
        return adoptionHousesServiceImpl.getAllAdoptionHouses();
    }

    @GetMapping("/{id}")
    public AdoptionHouses getById(@PathVariable Integer id) throws NoRecordWithIdException{
        return adoptionHousesServiceImpl.getAdoptionHouseById(id);
    }

    @PostMapping
    public AdoptionHouses addAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        return adoptionHousesServiceImpl.saveAdoptionHouse(adoptionHouse);
    }

    @PutMapping
    public AdoptionHouses updateAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse) throws NoRecordWithIdException{

        return adoptionHousesServiceImpl.updateAdoptionHouse(adoptionHouse);
    }

    @DeleteMapping("/{id}")
    public void deleteAdoptionHouses(@PathVariable Integer id) throws NoRecordWithIdException{
        adoptionHousesServiceImpl.deleteAdoptionHouseById(id);
    }
}
