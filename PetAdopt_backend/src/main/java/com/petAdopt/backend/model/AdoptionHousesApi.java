package com.petAdopt.backend.model;


import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Vector;
@RestController
@RequestMapping("/api/adoptionhouses")
public class AdoptionHousesApi {
    private Vector<AdoptionHouses> adoptionHousesVector;
    public AdoptionHousesApi(){
        adoptionHousesVector = new Vector<>();
    }

    @GetMapping("/alladoptionhouses")
    public Vector<AdoptionHouses> getAll(){
        return adoptionHousesVector;
    }

    @GetMapping
    public AdoptionHouses getById(@RequestParam int index){
        Optional<AdoptionHouses> first = adoptionHousesVector.stream().
                filter(element->element.getId() == index).findFirst();
        return first.get();
    }

    @PostMapping
    public boolean addAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        return adoptionHousesVector.add(adoptionHouse);
    }

    @PutMapping
    public boolean updateAdoptionHouses(@RequestBody AdoptionHouses adoptionHouse){
        return adoptionHousesVector.add(adoptionHouse);
    }
    @DeleteMapping
    public boolean deleteAdopionHouses(@RequestParam int index){
        return adoptionHousesVector.removeIf(element -> element.getId() == index);
    }
}
