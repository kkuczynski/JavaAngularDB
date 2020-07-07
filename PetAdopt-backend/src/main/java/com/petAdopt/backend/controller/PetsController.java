package com.petAdopt.backend.controller;

import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.service.PetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pets")
public class PetsController {

    private PetsService petsService;

    @Autowired
    public PetsController(PetsService petsService){
        this.petsService = petsService;

    }
    @RequestMapping("/handle")
    public ResponseEntity<String> handle() throws URISyntaxException{
        URI location = new URI("http://localhost:4200");
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setLocation(location);
        responseHeaders.set("Access-Control-Allow-Origin", "Access-Control-Allow-Origin");
        return new ResponseEntity<String>("Hello World", responseHeaders, HttpStatus.CREATED);
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

