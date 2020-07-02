package com.petAdopt.backend.model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

