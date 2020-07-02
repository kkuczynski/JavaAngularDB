package com.petAdopt.backend.model;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
